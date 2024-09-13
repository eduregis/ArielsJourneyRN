import { ScrollView, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import MenuCard from "../components/MenuCard";

function MenuScreen({ navigation }) {
  function goToNewGame() {
    navigation.navigate("Gameplay");
  }

  function goToContinue() {
    navigation.navigate("Gameplay");
  }

  function goToHerosJourney() {
    navigation.navigate("HerosJourney");
  }

  function goToAchievements() {
    navigation.navigate("Achievements");
  }

  function goToArchetypes() {
    navigation.navigate("Archetypes");
  }

  return (
    <>
      <CustomNavigationBar title="Menu" hideBackButton={true} />
      <View style={styles.menuContainer}>
        <ScrollView horizontal={true}>
          <MenuCard title="Novo Jogo" menuHandler={goToNewGame} />
          <MenuCard title="Continuar" menuHandler={goToContinue} />
          <MenuCard title="Jornada do Herói" menuHandler={goToHerosJourney} />
          <MenuCard title="Arquétipos" menuHandler={goToArchetypes} />
          <MenuCard title="Conquistas" menuHandler={goToAchievements} />
        </ScrollView>
      </View>
    </>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
