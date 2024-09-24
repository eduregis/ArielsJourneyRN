import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAsyncStorage() {
  async function setStorageHandler(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error(e);
    }
  }

  async function getStorageHandler(key) {
    try {
      const storageStr = await AsyncStorage.getItem(key);
      return storageStr != null ? JSON.parse(storageStr) : null;
    } catch (e) {
      return null;
    }
  }

  return { setStorageHandler, getStorageHandler };
}
