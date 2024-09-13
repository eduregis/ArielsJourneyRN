import { ScrollView, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";

function ArchetypesScreen({ navigation }) {
  function backToMenu() {
    navigation.navigate("Menu");
  }

  return (
    <>
      <CustomNavigationBar title="Arquétipos" backHandler={backToMenu} />
      <View style={styles.menuContainer}>
        <ScrollView horizontal={true}></ScrollView>
      </View>
    </>
  );
}

export default ArchetypesScreen;

const styles = StyleSheet.create({});
