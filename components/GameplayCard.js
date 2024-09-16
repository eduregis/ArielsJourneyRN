import { StyleSheet, Image, View, ImageBackground } from "react-native";
import Animated from "react-native-reanimated";
import React from "react";

function GameplayCard() {
  return (
    <View>
      <Animated.View>
        <Image
          style={[styles.card, styles.shadowContent]}
          source={require("../assets/ui/Ariel_choice_card_back.png")}
          resizeMode="contain"
        />
      </Animated.View>
      <Animated.View>
        <ImageBackground
          source={require("../assets/ui/Ariel_choice_card_front_bkg.png")}
          resizeMode="cover"
          style={[styles.card, styles.frontCardContainer, styles.shadowContent]}
          imageStyle={{ borderRadius: 15 }}
        >
          <Image
            source={require("../assets/images/gameplayCards/Ariel_card_001.png")}
            resizeMode="cover"
            style={styles.frontCard}
          />
        </ImageBackground>
      </Animated.View>
    </View>
  );
}

export default GameplayCard;

const styles = StyleSheet.create({
  card: {
    width: 168,
    height: 300,
  },
  frontCardContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frontCard: {
    marginTop: 2,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: "hidden",
  },
  shadowContent: {
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 3,
    overflow: "visible",
  },
});
