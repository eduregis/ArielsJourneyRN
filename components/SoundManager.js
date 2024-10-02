import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { Audio } from "expo-av";

function SoundManager({ soundPath }, ref) {
  // MARK: - Variables
  const [sound, setSound] = useState();

  // MARK: - Functions
  useImperativeHandle(ref, () => ({
    playSoundOnceHandler: () => {
      playSoundOnce();
    },
  }));

  async function playSoundOnce() {
    // console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(soundPath);
    setSound(sound);

    // console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          // console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return <View />;
}

export default forwardRef(SoundManager);

const styles = StyleSheet.create({});
