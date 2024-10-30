import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import { Colors, Constants } from "../constants/constants";

function MenuCard({ title, menuHandler, disabled, coverImage, card }) {
  return (
    <Pressable
      onPress={menuHandler}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <ImageBackground
        source={coverImage}
        resizeMode="cover"
        style={[styles.container, card, disabled && styles.disabled]}
      >
        <ImageBackground
          source={require("../assets/ui/Ariel_menu_card_name.png")}
          resizeMode="cover"
          style={styles.nameContainer}
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </ImageBackground>
    </Pressable>
  );
}

export default MenuCard;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
    marginHorizontal: 12,
  },
  disabled: {
    opacity: 0.4,
  },
  nameContainer: {
    width: 100,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.background600,
    marginBottom: 5,
  },
  title: {
    color: Colors.background500,
    fontSize: Constants.mediumFontSize,
    fontFamily: "macondo-regular",
    textAlign: "center",
  },
});
