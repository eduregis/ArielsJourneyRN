import { ScrollView, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";

function GalleryScreen({ navigation }) {
  function backToMenu() {
    navigation.navigate("Menu");
  }

  return (
    <>
      <CustomNavigationBar title="Galeria" backHandler={backToMenu} />
      <View style={styles.menuContainer}>
        <ScrollView horizontal={true}></ScrollView>
      </View>
    </>
  );
}

export default GalleryScreen;

const styles = StyleSheet.create({});
