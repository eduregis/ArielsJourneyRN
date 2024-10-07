import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import { Colors } from "../constants/colors";

function CustomSlider({ text, onChange, value }) {
  return (
    <>
      <View style={styles.sliderContainer}>
        <Text style={styles.text}>{text}</Text>
        <Slider
          style={styles.slider}
          minimumTrackTintColor={Colors.primary100}
          onSlidingComplete={(progress) => onChange(progress)}
          value={value}
        />
      </View>
    </>
  );
}

export default CustomSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 343,
    marginVertical: 12,
  },
  text: {
    color: Colors.primary300,
    fontSize: 21,
    fontFamily: "macondo-regular",
    textAlign: "center",
  },
  slider: {
    width: 150,
    height: 25,
  },
});
