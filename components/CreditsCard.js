import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

function CreditsCard() {
  return (
    <>
      <View style={styles.creditContainer}>
        <Text style={styles.text}>Programação:</Text>
        <Text style={styles.text}>Eduardo Regis</Text>
      </View>
      <View style={styles.creditContainer}>
        <Text style={styles.text}>Roteiro/Character Design:</Text>
        <Text style={styles.text}>Malu Fernandes</Text>
      </View>
      <View style={styles.creditContainer}>
        <Text style={styles.text}>Ilustrações:</Text>
        <Text style={styles.text}>Gama</Text>
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
});
