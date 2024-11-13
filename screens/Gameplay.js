import { ImageBackground, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import GameplayCard from "../components/GameplayCard";
import { useEffect, useRef, useState } from "react";
import { GAMEPLAY_STAGES } from "../models/gameplayStages";
import { useAsyncStorage } from "../data/useAsyncStorage";
import Animated, {
  max,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import WriteText from "../components/WriteText";
import SoundManager from "../components/SoundManager";

function Gameplay({ navigation }) {
  // MARK: - Variables
  const [data, setData] = useState([]);
  const [showDialogue, setShowDialogue] = useState(true);
  const [textIsComplete, setTextIsComplete] = useState(false);
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const [actualDialogueId, setActualDialogueId] = useState(null);
  const [background, setBackground] = useState(null);
  const asyncStorageHook = useAsyncStorage();
  const leftCardRef = useRef();
  const rightCardRef = useRef();
  const writeLetterRef = useRef();
  const soundAmbienceRef = useRef();
  const soundEffectRef = useRef();
  const translate = useSharedValue(0);

  // MARK: - Animated Styles
  const translateAnimatedStyles = useAnimatedStyle(() => {
    const translateValue = interpolate(
      translate.value,
      [0, 1, 2],
      [-500, 0, 500]
    );
    return {
      transform: [
        {
          translateY: withTiming(translateValue, { duration: 500 }),
        },
      ],
    };
  });

  // MARK: - Observables
  useEffect(() => {
    setBackground(require("../assets/ui/Ariel_gameplay_bkg_002.png"));
    setupStage();
  }, []);

  useEffect(() => {
    setupInitial();
  }, [data]);

  // MARK: - Functions
  async function setupStage(){
    const stageId = await asyncStorageHook.getStorageHandler("@stage");
    var stage = GAMEPLAY_STAGES[stageId]
    setData(stage.dialogues);
    setBackground(stage.backgroundImage);
    soundAmbienceRef.current.playMusicHandler();
  }

  async function setupInitial() {
    const result = await asyncStorageHook.getStorageHandler("@dialogue");
    setActualDialogueId(result);
    setTimeout(function () {
      setShowDialogue(true);
      translateCards(1);
    }, 500);
  }

  function backToMenu() {
    navigation.navigate("Menu");
  }

  function translateCards(animateIndex) {
    translate.value = animateIndex;
  }

  function soundTrigger() {
    soundEffectRef.current.playSoundOnceHandler();
  }

  function getDialogue(dialogueId) {
    const dialogue = data.find(function (element) {
      return element.dialogueId == dialogueId;
    });
    return dialogue;
  }

  function flipCards() {
    if (!textIsComplete) {
      if (getDialogue(actualDialogueId)?.firstCardImageName != null) {
        leftCardRef.current.flipCardHandler();
        rightCardRef.current.flipCardHandler();
      }
      setTextIsComplete(true);
    } else if (getDialogue(actualDialogueId)?.firstCardImageName == null) {
      setCardIsSelected(true);
      setTimeout(function () {
        translateCards(2);
        setupNextDialogue(getDialogue(actualDialogueId).nextFirstDialogueId);
      }, 500);
    }
  }

  function selectLeftCard() {
    if (textIsComplete && !cardIsSelected) {
      rightCardRef.current.flipCardHandler();
      setCardIsSelected(true);
      setTimeout(function () {
        translateCards(2);
        setupNextDialogue(getDialogue(actualDialogueId).nextFirstDialogueId);
        leftCardRef.current.flipCardHandler();
      }, 500);
    }
  }

  function selectRightCard() {
    if (textIsComplete && !cardIsSelected) {
      leftCardRef.current.flipCardHandler();
      setCardIsSelected(true);
      setTimeout(function () {
        translateCards(2);
        setupNextDialogue(getDialogue(actualDialogueId).nextSecondDialogueId);
        rightCardRef.current.flipCardHandler();
      }, 500);
    }
  }

  function setupNextDialogue(nextDialogueId) {
    if (nextDialogueId == 0) {
      setupNextStage(getDialogue(actualDialogueId)?.differentStage)
    } else {
      setTimeout(function () {
        translateCards(0);
        setTextIsComplete(false);
        setCardIsSelected(false);
        showNextDialogue(nextDialogueId);
        writeLetterRef.current.clearTextHandler();
      }, 500);
    }
  }

  async function setupNextStage(nextStageId) {
      await asyncStorageHook.setStorageHandler("@dialogue", 0);
      const stageId = await asyncStorageHook.getStorageHandler("@stage");
      var stage = GAMEPLAY_STAGES[stageId]
      await asyncStorageHook.setStorageHandler("@stage", nextStageId ?? stage.nextStageId);
      var newStage = GAMEPLAY_STAGES[nextStageId ?? stage.nextStageId]
      setTimeout(function () {
        setShowDialogue(false);
        translateCards(0);
        setTextIsComplete(false);
        setCardIsSelected(false);
        writeLetterRef.current.clearTextHandler();
        setData(newStage.dialogues);
        setBackground(newStage.backgroundImage);
    }, 500);
  }

  function showNextDialogue(nextDialogueId) {
    setShowDialogue(false);
    setTimeout(function () {
      setShowDialogue(true);
      translateCards(1);
      asyncStorageHook.setStorageHandler("@dialogue", nextDialogueId);
      setActualDialogueId(nextDialogueId);
      getTriggerArrays(nextDialogueId);
      if (getDialogue(nextDialogueId)?.soundTrigger != null) {
        soundTrigger();
      }
    }, 500);
  }

  function getTriggerArrays(nextDialogueId) {
    if (getDialogue(nextDialogueId) && (getDialogue(nextDialogueId)?.triggerArray != null)) {
      const dialogueTriggers = getDialogue(nextDialogueId).triggerArray;
      dialogueTriggers.forEach(async (element) => {
        const splitedString = element.split("_");
        if (splitedString.length > 1) {
          if (splitedString[0] == "archetype") {
            const actualArchetype =
              (await asyncStorageHook.getStorageHandler("@archetype")) ?? 0;
            const newArchetype = Number(splitedString[1]);
            const archetype =
              actualArchetype < newArchetype ? newArchetype : actualArchetype;
            asyncStorageHook.setStorageHandler("@archetype", archetype);
          } else if (splitedString[0] == "herosJourney") {
            const actualHerosJourney =
              (await asyncStorageHook.getStorageHandler("@herosJourney")) ?? 0;
            const newHerosJourney = Number(splitedString[1]);
            const herosJourney =
              actualHerosJourney < newHerosJourney
                ? newHerosJourney
                : actualHerosJourney;
            asyncStorageHook.setStorageHandler("@herosJourney", herosJourney);
          }
        }
      });
    }
  }

  // MARK: - View
  var content = <View />;
  var soundEffectTrigger = <View />;
  var firstCard = <View />;
  var secondCard = <View />;

  if (getDialogue(actualDialogueId)?.firstCardImageName != null) {
    firstCard = (
        <View style={styles.cardContainer}>
          <GameplayCard
            image={getDialogue(actualDialogueId).firstCardImageName}
            text={getDialogue(actualDialogueId).firstCardText}
            selectHandler={selectLeftCard}
            ref={leftCardRef}
          />
        </View>
      )
  }

  if (getDialogue(actualDialogueId)?.secondCardImageName != null) {
    secondCard = (
      <View style={styles.cardContainer}>
        <GameplayCard
          image={getDialogue(actualDialogueId).secondCardImageName}
          text={getDialogue(actualDialogueId).secondCardText}
          selectHandler={selectRightCard}
          ref={rightCardRef}
        />
      </View>
      )
  }

  if (actualDialogueId != null && getDialogue(actualDialogueId)) {
    content = (
      <Animated.View
        style={[
          styles.gameplayContainer,
          !showDialogue && styles.hidden,
          translateAnimatedStyles,
        ]}
      >
        {firstCard}
        <View style={styles.letterContainer}>
          <ImageBackground
            style={[styles.letter, styles.shadowContent]}
            source={require("../assets/ui/Ariel_letter.png")}
            resizeMode="contain"
          >
            <WriteText
              text={getDialogue(actualDialogueId).descriptionText}
              coloredStrings={getDialogue(actualDialogueId)?.coloredStrings}
              onPress={flipCards}
              ref={writeLetterRef}
            />
          </ImageBackground>
        </View>
        {secondCard}
      </Animated.View>
    );
  }

  if (getDialogue(actualDialogueId)?.soundTrigger != null) {
    soundEffectTrigger = (
      <SoundManager
        soundPath={getDialogue(actualDialogueId)?.soundTrigger}
        ref={soundEffectRef}
      />
    );
  }

  return (
    <>
      <ImageBackground
        source={background}
        style={styles.container}
      >
        <CustomNavigationBar title="" hideBkg={true} backHandler={backToMenu} />
        <SoundManager
          soundPath={require("../assets/sounds/Ariel_ambience_01.mp3")}
          ref={soundAmbienceRef}
        />
        {soundEffectTrigger}
        {content}
      </ImageBackground>
    </>
  );
}

export default Gameplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameplayContainer: {
    flex: 1,
    flexDirection: "row",
  },
  hidden: {
    opacity: 0,
  },
  cardContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  letterContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    width: 252,
    height: 290,
    padding: 10,
  },
  shadowContent: {
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 3,
    overflow: "visible",
  },
});
