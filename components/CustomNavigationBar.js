import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  Pressable,
} from "react-native";
import { useAsyncStorage } from "../data/useAsyncStorage";
import { Colors } from "../constants/colors";
import { useDispatch } from "react-redux";
import { trigger } from "../store/redux/settingsTrigger";

function CustomNavigationBar({ title, hideBkg, hideBackButton, backHandler }) {
  const asyncStorageHook = useAsyncStorage();
  const dispatch = useDispatch();

  async function settingsNavigateHandler() {
    dispatch(trigger());
    // await asyncStorageHook.setStorageHandler("@dialogue", 0);
    // await asyncStorageHook.setStorageHandler("@archetype", 0);
    // await asyncStorageHook.setStorageHandler("@herosJourney", 0);
  }

  var navigationBkg = require("../assets/ui/Ariel_navigation_bar.png");

  if (hideBkg) {
    navigationBkg = null;
  }

  return (
    <ImageBackground
      source={navigationBkg}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={backHandler}
          style={({ pressed }) => [
            styles.backContainer,
            pressed && styles.pressed,
            hideBackButton && styles.hideBackButton,
          ]}
        >
          <Image
            style={styles.backButton}
            source={require("../assets/ui/Ariel_back_icon.png")}
          />
        </Pressable>
        <Image
          style={styles.adornments}
          source={require("../assets/ui/Ariel_adornment.png")}
        />
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.buttonContainer}>
        <Image
          style={styles.adornments}
          source={require("../assets/ui/Ariel_adornment.png")}
        />
        <Pressable
          onPress={settingsNavigateHandler}
          style={({ pressed }) => [
            styles.settingsContainer,
            pressed && styles.pressed,
          ]}
        >
          <Image
            style={styles.settingsButton}
            source={require("../assets/ui/Ariel_config_icon.png")}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
}

export default CustomNavigationBar;

const styles = StyleSheet.create({
  container: {
    height: 68,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: Colors.primary100,
    fontSize: 20,
    fontFamily: "macondo-regular",
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  backContainer: {
    marginLeft: 21,
    marginRight: 38,
  },
  backButton: {
    width: 36,
    height: 34,
  },
  adornments: {
    width: 191,
    height: 23,
  },
  settingsContainer: {
    marginLeft: 38,
    marginRight: 24,
  },
  settingsButton: {
    width: 34,
    height: 34,
  },
  pressed: {
    opacity: 0.7,
  },
  hideBackButton: {
    opacity: 0,
  },
});
