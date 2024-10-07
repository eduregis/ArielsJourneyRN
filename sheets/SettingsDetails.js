import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import CustomButton from "../components/CustomButton";
import { useAsyncStorage } from "../data/useAsyncStorage";
import CustomSlider from "../components/CustomSlider";

function SettingsDetails() {
  const asyncStorageHook = useAsyncStorage();
  const [ambienceVolume, setAmbienceValue] = useState(0);
  const [musicVolume, setMusicValue] = useState(0);
  const [effectVolume, setEffectValue] = useState(0);

  async function resetGame() {
    await asyncStorageHook.setStorageHandler("@dialogue", 0);
    await asyncStorageHook.setStorageHandler("@archetype", 0);
    await asyncStorageHook.setStorageHandler("@herosJourney", 0);
  }

  function ambienceChange(progress) {
    asyncStorageHook.setStorageHandler("@ambienceVolume", progress);
    console.log(progress);
  }

  function musicChange(progress) {
    asyncStorageHook.setStorageHandler("@musicVolume", progress);
    console.log(progress);
  }

  function effectChange(progress) {
    asyncStorageHook.setStorageHandler("@effectVolume", progress);
    console.log(progress);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setAmbienceValue(
      await asyncStorageHook.getStorageHandler("@ambienceVolume")
    );
    setMusicValue(await asyncStorageHook.getStorageHandler("@musicVolume"));
    setEffectValue(await asyncStorageHook.getStorageHandler("@effectVolume"));
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
            <CustomSlider
              text="Vol. de ambiente:"
              onChange={ambienceChange}
              value={ambienceVolume}
            />
            <CustomSlider
              text="Vol. de música:"
              onChange={musicChange}
              value={musicVolume}
            />
            <CustomSlider
              text="Vol. de efeitos:"
              onChange={effectChange}
              value={effectVolume}
            />
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
  creditsAndRestartContainer: {
    flex: 1,
    alignItems: "center",
  },
});
