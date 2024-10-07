import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  Pressable,
} from "react-native";
import { Colors } from "../constants/colors";
import { useCallback } from "react";

function CreditsCard() {
  const supportedURL = "https://www.linkedin.com/in/eduardo-regis/";

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <Pressable onPress={handlePress}>
        <Text style={[styles.text, styles.underlined]}>{children}</Text>
      </Pressable>
    );
  };

  return (
    <>
      <View style={styles.creditContainer}>
        <Text style={styles.text}>Programação:</Text>
        <OpenURLButton url={supportedURL}>Eduardo Regis</OpenURLButton>
      </View>
      <View style={styles.creditContainer}>
        <Text style={styles.text}>Roteiro/Character Design:</Text>
        <OpenURLButton url={supportedURL}>Malu Fernandes</OpenURLButton>
      </View>
      <View style={styles.creditContainer}>
        <Text style={styles.text}>Ilustrações:</Text>
        <OpenURLButton url={supportedURL}>Gama</OpenURLButton>
      </View>
    </>
  );
}

export default CreditsCard;

const styles = StyleSheet.create({
  creditContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 350,
    marginVertical: 4,
  },
  text: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "macondo-regular",
    textAlign: "center",
  },
  text: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "macondo-regular",
    textAlign: "center",
  },
  underlined: {
    textDecorationLine: "underline",
  },
});
