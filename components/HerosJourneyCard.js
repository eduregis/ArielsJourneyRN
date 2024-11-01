import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import { Colors, Constants } from "../constants/constants";
import { HEROS_JOURNEY } from "../models/herosJourney";

function HerosJourneyCard({ cardId, active, exhibition, onPress }) {
  var backgroungImageSource = require("../assets/ui/Ariel_arrow_middle_heros_journey.png");
  var card = HEROS_JOURNEY[cardId];

  if (exhibition) {
    backgroungImageSource = null;
  }

  var cardContent = (
    <ImageBackground
      source={require("../assets/ui/Ariel_heros_journey_card_empty.png")}
      resizeMode="contain"
      style={styles.container}
    >
      <View style={styles.arrowMiddleNumberContainer}>
        <Text style={styles.arrowMiddleNumber}>{card.id + 1}</Text>
      </View>
    </ImageBackground>
  );

  if (active) {
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
              <View style={styles.numberContainer}>
                <Text style={styles.number}>{card.id + 1}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{card.herosJourneysStage}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    );
  }

  return (
    <>
      <ImageBackground
        source={backgroungImageSource}
        resizeMode="contain"
        style={styles.arrowMiddle}
      >
        {cardContent}
      </ImageBackground>
    </>
  );
}
export default HerosJourneyCard;

const styles = StyleSheet.create({
  arrowMiddle: {
    width: 142,
    height: 260,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowMiddleNumberContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowMiddleNumber: {
    color: Colors.primary100,
    fontSize: Constants.titleFontSize,
    fontFamily: "macondo-regular",
    textAlign: "center",
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
    fontSize: Constants.mediumFontSize,
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
    fontSize: Constants.smallFontSize,
    fontFamily: "macondo-regular",
    textAlign: "center",
    marginHorizontal: 12,
  },
});
