import { ScrollView, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";

function Gameplay({ navigation }) {
  function backToMenu() {
    navigation.navigate("Menu");
  }

  return (
    <>
      <CustomNavigationBar title="Gameplay" backHandler={backToMenu} />
      <View style={styles.menuContainer}>
        <ScrollView horizontal={true}></ScrollView>
      </View>
    </>
  );
}

export default Gameplay;

const styles = StyleSheet.create({});
