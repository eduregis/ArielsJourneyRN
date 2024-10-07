import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { useAsyncStorage } from "../data/useAsyncStorage";
import { Audio } from "expo-av";

function SoundManager({ soundPath }, ref) {
  // MARK: - Variables
  const asyncStorageHook = useAsyncStorage();
  const [sound, setSound] = useState();

  // MARK: - Functions
  useImperativeHandle(ref, () => ({
    playSoundOnceHandler: () => {
      playSoundOnce();
    },
    playMusicHandler: () => {
      playMusic();
    },
  }));

  async function playSoundOnce() {
    // Loading Sound
    const { sound } = await Audio.Sound.createAsync(soundPath);
    const volume = await asyncStorageHook.getStorageHandler("@effectVolume");
    setSound(sound);

    // Playing Sound
    await sound.setVolumeAsync(volume);
    await sound.playAsync();
  }

  async function playMusic() {
    // Loading Sound
    const { sound } = await Audio.Sound.createAsync(soundPath);
    const volume = await asyncStorageHook.getStorageHandler("@musicVolume");
    setSound(sound);

    // Playing Sound
    await sound.setIsLoopingAsync(true);
    await sound.setVolumeAsync(volume);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          // Unloading Sound
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return <View />;
}

export default forwardRef(SoundManager);

const styles = StyleSheet.create({});
