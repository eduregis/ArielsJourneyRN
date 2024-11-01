import { ScrollView, StyleSheet, View } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import MenuCard from "../components/MenuCard";
import { useAsyncStorage } from "../data/useAsyncStorage";
import { useEffect, useState } from "react";
import store from "../store/redux/store";

function MenuScreen({ navigation }) {
  const [dialogue, setDialogue] = useState(0);
  const asyncStorageHook = useAsyncStorage();

  store.subscribe(() => {
    let settings = store.getState().settings;
    if (settings.value == false) {
      getData();
    }
  });

  async function goToNewGame() {
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

  function goToGallery() {
    navigation.navigate("Gallery");
  }

  async function getData() {
    setDialogue(await asyncStorageHook.getStorageHandler("@dialogue"));

    // console.log(
    //   "Dialogue: ",
    //   await asyncStorageHook.getStorageHandler("@dialogue")
    // );
    // console.log(
    //   "Archetypes: ",
    //   await asyncStorageHook.getStorageHandler("@archetype")
    // );
    // console.log(
    //   "Hero`s Journey: ",
    //   await asyncStorageHook.getStorageHandler("@herosJourney")
    // );
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
          <MenuCard
            title="Conquistas"
            menuHandler={goToAchievements}
            card={styles.terciaryCard}
            coverImage={require("../assets/images/Ariel_menu_card_achievements.png")}
          />
          <MenuCard
            title="Arquétipos"
            menuHandler={goToArchetypes}
            card={styles.secondaryCard}
            coverImage={require("../assets/images/Ariel_menu_card_archetypes.png")}
          />
          <MenuCard
            title={dialogue != 0 ? "Continuar" : "Novo Jogo"}
            menuHandler={goToNewGame}
            card={styles.mainCard}
            coverImage={require("../assets/images/Ariel_menu_card_gameplay.png")}
          />
          <MenuCard
            title="Jornada do Herói"
            menuHandler={goToHerosJourney}
            card={styles.secondaryCard}
            coverImage={require("../assets/images/Ariel_menu_card_herosJourney.png")}
          />
          <MenuCard
            title="Galeria"
            menuHandler={goToGallery}
            card={styles.terciaryCard}
            coverImage={require("../assets/images/Ariel_menu_card_gallery.png")}
          />
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
  mainCard: {
    width: 162,
    height: 275,
  },
  secondaryCard: {
    width: 112,
    height: 232,
    marginTop: 20,
  },
  terciaryCard: {
    width: 112,
    height: 189,
    marginTop: 43,
  },
});
