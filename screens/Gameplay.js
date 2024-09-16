import { ImageBackground, StyleSheet, View, Image } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import GameplayCard from "../components/GameplayCard";
import { useState } from "react";
import { GAMEPLAY_DIALOGUES } from "../models/gameplayDialogues";

function Gameplay({ navigation }) {
  const data = GAMEPLAY_DIALOGUES;
  const [actualDialogueId, setActualDialogueId] = useState(0);

  function backToMenu() {
    navigation.navigate("Menu");
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
            />
          </View>
          <View style={styles.letterContainer}>
            <Image
              style={[styles.letter, styles.shadowContent]}
              source={require("../assets/ui/Ariel_letter.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardContainer}>
            <GameplayCard
              image={data[actualDialogueId].secondCardImageName}
              text={data[actualDialogueId].secondCardText}
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
