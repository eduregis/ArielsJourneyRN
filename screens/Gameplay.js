import { ImageBackground, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import GameplayCard from "../components/GameplayCard";
import { useEffect, useRef, useState } from "react";
import { GAMEPLAY_DIALOGUES } from "../models/gameplayDialogues";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import WriteText from "../components/WriteText";

function Gameplay({ navigation }) {
  // MARK: - Variables
  const data = GAMEPLAY_DIALOGUES;
  const [showDialogue, setShowDialogue] = useState(true);
  const [textIsComplete, setTextIsComplete] = useState(false);
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const [actualDialogueId, setActualDialogueId] = useState(0);
  const leftCardRef = useRef();
  const rightCardRef = useRef();
  const writeLetterRef = useRef();
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

  // MARK: - Functions
  useEffect(() => {
    setTimeout(function () {
      translateCards(1);
    }, 500);
  }, []);

  function backToMenu() {
    navigation.navigate("Menu");
  }

  function translateCards(animateIndex) {
    translate.value = animateIndex;
  }

  function flipCards() {
    if (!textIsComplete) {
      leftCardRef.current.flipCardHandler();
      rightCardRef.current.flipCardHandler();
      setTextIsComplete(true);
    }
  }

  function selectLeftCard() {
    if (textIsComplete && !cardIsSelected) {
      rightCardRef.current.flipCardHandler();
      setCardIsSelected(true);
      setTimeout(function () {
        translateCards(2);
        setupNextDialogue(data[actualDialogueId].nextFirstDialogueId);
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
        setupNextDialogue(data[actualDialogueId].nextSecondDialogueId);
        rightCardRef.current.flipCardHandler();
      }, 500);
    }
  }

  function setupNextDialogue(nextDialogueId) {
    setTimeout(function () {
      translateCards(0);
      setTextIsComplete(false);
      setCardIsSelected(false);
      showNextDialogue(nextDialogueId);
      writeLetterRef.current.clearTextHandler();
    }, 500);
  }

  function showNextDialogue(nextDialogueId) {
    setShowDialogue(false);
    setTimeout(function () {
      setShowDialogue(true);
      translateCards(1);
      setActualDialogueId(nextDialogueId);
    }, 500);
  }

  // MARK: - View
  return (
    <>
      <ImageBackground
        source={require("../assets/ui/Ariel_gameplay_bkg.png")}
        style={styles.container}
      >
        <CustomNavigationBar title="" hideBkg={true} backHandler={backToMenu} />

        <Animated.View
          style={[
            styles.gameplayContainer,
            !showDialogue && styles.hidden,
            translateAnimatedStyles,
          ]}
        >
          <View style={styles.cardContainer}>
            <GameplayCard
              image={data[actualDialogueId].firstCardImageName}
              text={data[actualDialogueId].firstCardText}
              selectHandler={selectLeftCard}
              ref={leftCardRef}
            />
          </View>
          <View style={styles.letterContainer}>
            <ImageBackground
              style={[styles.letter, styles.shadowContent]}
              source={require("../assets/ui/Ariel_letter.png")}
              resizeMode="contain"
            >
              <WriteText
                text={data[actualDialogueId].descriptionText}
                coloredStrings={data[actualDialogueId].coloredStrings}
                onPress={flipCards}
                ref={writeLetterRef}
              />
            </ImageBackground>
          </View>
          <View style={styles.cardContainer}>
            <GameplayCard
              image={data[actualDialogueId].secondCardImageName}
              text={data[actualDialogueId].secondCardText}
              selectHandler={selectRightCard}
              ref={rightCardRef}
            />
          </View>
        </Animated.View>
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
