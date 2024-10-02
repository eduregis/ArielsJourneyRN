import { ScrollView, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import MenuCard from "../components/MenuCard";
import { useAsyncStorage } from "../data/useAsyncStorage";
import { useEffect, useState } from "react";

function MenuScreen({ navigation }) {
  const [dialogue, setDialogue] = useState(0);
  const asyncStorageHook = useAsyncStorage();

  async function goToNewGame() {
    await asyncStorageHook.setStorageHandler("@dialogue", 0);
    navigation.navigate("Gameplay");
  }

  function goToContinue() {
    if (dialogue != 0) {
      navigation.navigate("Gameplay");
    }
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

  async function getData() {
    setDialogue(await asyncStorageHook.getStorageHandler("@dialogue"));

    console.log(
      "Dialogue: ",
      await asyncStorageHook.getStorageHandler("@dialogue")
    );
    console.log(
      "Archetypes: ",
      await asyncStorageHook.getStorageHandler("@archetype")
    );
    console.log(
      "Hero`s Journey: ",
      await asyncStorageHook.getStorageHandler("@herosJourney")
    );
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <CustomNavigationBar title="Menu" hideBackButton={true} />
      <View style={styles.menuContainer}>
        <ScrollView horizontal={true}>
          <MenuCard title="Novo Jogo" menuHandler={goToNewGame} />
          <MenuCard
            title="Continuar"
            menuHandler={goToContinue}
            disabled={dialogue == 0}
          />
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
