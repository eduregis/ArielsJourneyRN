import { ImageBackground, StyleSheet, View, Image } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";

function Gameplay({ navigation }) {
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
            <Image
              style={[styles.card, styles.shadowContent]}
              source={require("../assets/ui/Ariel_choice_card.png")}
              resizeMode="contain"
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
            <Image
              style={[styles.card, styles.shadowContent]}
              source={require("../assets/ui/Ariel_choice_card.png")}
              resizeMode="contain"
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
  card: {
    width: 168,
    height: 300,
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
