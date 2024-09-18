import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

function MenuCard({ title, menuHandler }) {
  return (
    <Pressable
      onPress={menuHandler}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <ImageBackground
        source={require("../assets/images/Ariel_menu_card_game.png")}
        resizeMode="cover"
        style={styles.container}
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
    width: 120,
    height: 275,
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
    marginHorizontal: 12,
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
    fontSize: 14,
    fontFamily: "macondo-regular",
    textAlign: "center",
  },
});
