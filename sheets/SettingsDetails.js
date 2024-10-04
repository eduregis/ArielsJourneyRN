import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import Slider from "@react-native-community/slider";
import CustomButton from "../components/CustomButton";
import { useAsyncStorage } from "../data/useAsyncStorage";

function SettingsDetails() {
  const asyncStorageHook = useAsyncStorage();

  async function resetGame() {
    await asyncStorageHook.setStorageHandler("@dialogue", 0);
    await asyncStorageHook.setStorageHandler("@archetype", 0);
    await asyncStorageHook.setStorageHandler("@herosJourney", 0);
  }

  return (
    <>
      <View style={styles.adornmentsContainer}>
        <Image
          style={styles.adornments}
          source={require("../assets/ui/Ariel_adornment.png")}
        />
        <Text style={styles.title}>Configurações</Text>
        <Image
          style={styles.adornments}
          source={require("../assets/ui/Ariel_adornment.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.slidersContainer}>
            <View style={styles.sliderContainer}>
              <Text style={styles.text}>Vol. de ambiente:</Text>
              <Slider style={styles.slider} />
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.text}>Vol. de música:</Text>
              <Slider style={styles.slider} />
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.text}>Vol. de efeitos:</Text>
              <Slider style={styles.slider} />
            </View>
          </View>
          <View style={styles.creditsAndRestartContainer}>
            <CustomButton title={"Reiniciar Aventura"} onPress={resetGame} />
          </View>
        </View>
      </View>
    </>
  );
}

export default SettingsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    flexDirection: "row",
  },
  adornmentsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    color: Colors.primary300,
    fontSize: 21,
    fontFamily: "macondo-regular",
    textAlign: "center",
    marginHorizontal: 54,
  },
  adornments: {
    width: 191,
    height: 23,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
  },
  slidersContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 30,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 343,
    marginVertical: 12,
  },
  text: {
    color: Colors.primary300,
    fontSize: 21,
    fontFamily: "macondo-regular",
    textAlign: "center",
  },
  slider: {
    width: 150,
    height: 25,
  },
  creditsAndRestartContainer: {
    flex: 1,
    alignItems: "center",
  },
});
