import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors, Constants } from "../constants/constants";
import CustomButton from "../components/CustomButton";
import { useAsyncStorage } from "../data/useAsyncStorage";
import CustomSlider from "../components/CustomSlider";
import CreditsCard from "../components/CreditsCard";

function SettingsDetails() {
  const asyncStorageHook = useAsyncStorage();
  const [disabledRestart, setDisabledRestart] = useState(false);
  const [ambienceVolume, setAmbienceValue] = useState(0);
  const [musicVolume, setMusicValue] = useState(0);
  const [effectVolume, setEffectValue] = useState(0);

  function callResetAlert() {
    Alert.alert(
      "Atenção!",
      "Você realmente deseja reiniciar sua aventura? Irá perder seu progresso atual.",
      [
        { text: "Voltar", style: "cancel" },
        { text: "Okay", style: "destructive", onPress: resetGameHandler },
      ]
    );
  }

  async function resetGameHandler() {
    await asyncStorageHook.setStorageHandler("@stage", 0);
    await asyncStorageHook.setStorageHandler("@dialogue", 0);
    await asyncStorageHook.setStorageHandler("@archetype", 0);
    await asyncStorageHook.setStorageHandler("@herosJourney", 0);
    setDisabledRestart(true);
  }

  async function ambienceChange(progress) {
    await asyncStorageHook.setStorageHandler("@ambienceVolume", progress);
  }

  async function musicChange(progress) {
    await asyncStorageHook.setStorageHandler("@musicVolume", progress);
  }

  async function effectChange(progress) {
    await asyncStorageHook.setStorageHandler("@effectVolume", progress);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const stage = (await asyncStorageHook.getStorageHandler("@stage"));
    const dialogue = (await asyncStorageHook.getStorageHandler("@dialogue"));
    setDisabledRestart(stage == 0 && dialogue == 0);

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
            <View style={styles.restartButton}>
              <CustomButton
                title={"Reiniciar Aventura"}
                disabled={disabledRestart}
                onPress={callResetAlert}
              />
            </View>
            <CreditsCard />
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
    fontSize: Constants.largeFontSize,
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
    justifyContent: "center",
  },
  restartButton: {
    marginBottom: 40
  },
});
