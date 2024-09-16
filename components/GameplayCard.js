import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Button,
  Text,
  Pressable,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "../constants/colors";

function GameplayCard({ image, text }) {
  const rotate = useSharedValue(0);
  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    };
  });
  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    };
  });

  function flipCard() {
    rotate.value = rotate.value ? 0 : 1;
  }

  return (
    <View>
      <Animated.View style={[styles.frontCardContainer, frontAnimatedStyles]}>
        <Pressable onPress={flipCard}>
          <Image
            style={[styles.card, styles.shadowContent]}
            source={require("../assets/ui/Ariel_choice_card_back.png")}
            resizeMode="contain"
          />
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.backCardContainer, backAnimatedStyles]}>
        <Pressable onPress={flipCard}>
          <ImageBackground
            source={require("../assets/ui/Ariel_choice_card_front_bkg.png")}
            resizeMode="cover"
            style={[styles.card, styles.frontCard, styles.shadowContent]}
            imageStyle={{ borderRadius: 15 }}
          >
            <Image
              source={image}
              resizeMode="cover"
              style={styles.frontCardImage}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{text}</Text>
            </View>
          </ImageBackground>
        </Pressable>
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
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  backCardContainer: {
    backfaceVisibility: "hidden",
  },
  frontCard: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frontCardImage: {
    marginTop: 2,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    width: 164,
    height: 245,
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
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.background500,
    fontSize: 14,
    fontFamily: "macondo-regular",
    textAlign: "center",
    marginHorizontal: 12,
  },
});
