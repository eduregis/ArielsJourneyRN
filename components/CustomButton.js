import { Pressable, StyleSheet, Text, ImageBackground } from "react-native";
import { Colors, Constants } from "../constants/constants";
import React from "react";

function CustomButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <ImageBackground
        source={require("../assets/ui/Ariel_menu_card_name.png")}
        resizeMode="cover"
        style={styles.nameContainer}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  nameContainer: {
    width: 200,
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
