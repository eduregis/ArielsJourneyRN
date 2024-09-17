import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import GameplayCard from "../components/GameplayCard";
import { useRef, useState } from "react";
import { GAMEPLAY_DIALOGUES } from "../models/gameplayDialogues";
import WriteText from "../components/WriteText";

function Gameplay({ navigation }) {
  const data = GAMEPLAY_DIALOGUES;
  const [actualDialogueId, setActualDialogueId] = useState(0);
  const leftCardRef = useRef();
  const rightCardRef = useRef();

  function backToMenu() {
    navigation.navigate("Menu");
  }

  function flipCards() {
    leftCardRef.current.flipCardHandler();
    rightCardRef.current.flipCardHandler();
  }

  return (
    <>
      <ImageBackground
        source={require("../assets/ui/Ariel_gameplay_bkg.png")}
        style={styles.container}
      >
        <CustomNavigationBar title="" hideBkg={true} backHandler={backToMenu} />
        <View style={styles.gameplayContainer}>
          <View style={styles.cardContainer}>
            <GameplayCard
              image={data[actualDialogueId].firstCardImageName}
              text={data[actualDialogueId].firstCardText}
              ref={leftCardRef}
            />
          </View>
          <Pressable style={styles.letterContainer} onPress={flipCards}>
            <ImageBackground
              style={[styles.letter, styles.shadowContent]}
              source={require("../assets/ui/Ariel_letter.png")}
              resizeMode="contain"
            >
              <WriteText text={data[actualDialogueId].descriptionText} />
            </ImageBackground>
          </Pressable>
          <View style={styles.cardContainer}>
            <GameplayCard
              image={data[actualDialogueId].secondCardImageName}
              text={data[actualDialogueId].secondCardText}
              ref={rightCardRef}
            />
          </View>
        </View>
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
