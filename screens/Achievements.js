import { ScrollView, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";

function AchievementsScreen({ navigation }) {
  function backToMenu() {
    navigation.navigate("Menu");
  }

  return (
    <>
      <CustomNavigationBar title="Conquistas" backHandler={backToMenu} />
      <View style={styles.menuContainer}>
        <ScrollView horizontal={true}></ScrollView>
      </View>
    </>
  );
}

export default AchievementsScreen;

const styles = StyleSheet.create({});
