import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

function ArchetypeCard({ title, image, active, number, exhibition, onPress }) {
  var backgroungImageSource = require("../assets/ui/Ariel_arrow_middle_heros_journey.png");

  if (exhibition) {
    backgroungImageSource = null;
  }

  var card = (
    <View style={styles.container}>
      <View style={styles.emptySymbolContainer}>
        <Text style={styles.emptySymbol}>{number}</Text>
      </View>
    </View>
  );

  if (active) {
    card = (
      <Pressable
        style={({ pressed }) => [pressed && styles.pressed]}
        onPress={onPress}
      >
        <ImageBackground
          source={require("../assets/ui/Ariel_heros_journey_card_container.png")}
          resizeMode="cover"
          style={[styles.container, styles.fillContainer]}
        >
          <View style={styles.imageContainer}>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.numberContainer}>
                <Text style={styles.number}>{number}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    );
  }

  return <>{card}</>;
}
export default ArchetypeCard;

const styles = StyleSheet.create({
  arrowMiddle: {
    width: 142,
    height: 260,
    alignItems: "center",
    justifyContent: "center",
  },
  emptySymbolContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptySymbolNumber: {
    width: 80,
    height: 80,
  },
  pressed: {
    opacity: 0.7,
  },
  container: {
    width: 120,
    height: 250,
    marginHorizontal: 12,
  },
  fillContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 15,
    overflow: "hidden",
  },
  numberContainer: {
    width: 24,
    height: 24,
    backgroundColor: Colors.primary500,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.background600,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.background600,
    fontSize: 13,
    fontFamily: "macondo-regular",
    textAlign: "center",
  },
  imageContainer: {
    width: 105,
    height: 215,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginTop: 7,
    borderWidth: 2,
    borderColor: Colors.background600,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    overflow: "hidden",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.background500,
    fontSize: 11,
    fontFamily: "macondo-regular",
    textAlign: "center",
    marginHorizontal: 12,
  },
});
