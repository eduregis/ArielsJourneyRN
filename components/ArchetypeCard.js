import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import { ARCHETYPES } from "../models/archetypes";

function ArchetypeCard({ cardId, active, exhibition, onPress }) {
  var backgroungImageSource = require("../assets/ui/Ariel_arrow_middle_heros_journey.png");
  var card = ARCHETYPES[cardId];

  if (exhibition) {
    backgroungImageSource = null;
  }

  var cardContent = (
    <ImageBackground
      source={require("../assets/ui/Ariel_heros_journey_card_empty.png")}
      resizeMode="contain"
      style={styles.container}
    >
      <View style={styles.emptySymbolContainer}>
        <View style={styles.emptySymbolContent}>
          <Image
            style={styles.emptySymbol}
            source={card.emptyIcon}
            resizeMode="contain"
          />
        </View>
      </View>
    </ImageBackground>
  );

  if (active && cardId != null) {
    cardContent = (
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
              source={card.imageName}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.symbolContainer}>
                <Image
                  style={styles.symbol}
                  source={card.fullIcon}
                  resizeMode="contain"
                />
              </View>
            </ImageBackground>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{card.archetypeStage}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    );
  }

  return <>{cardContent}</>;
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
  emptySymbolContent: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
  emptySymbol: {
    width: 45,
    height: 45,
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
  symbolContainer: {
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
  symbol: {
    width: 16,
    height: 16,
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
