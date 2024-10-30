import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "./constants/constants";

import MenuScreen from "./screens/Menu";
import GameplayScreen from "./screens/Gameplay";
import HerosJourneyScreen from "./screens/HerosJourney";
import ArchetypesScreen from "./screens/Archetypes";
import AchievementsScreen from "./screens/Achievements";
import GalleryScreen from "./screens/Gallery";
import store from "./store/redux/store";
import { useDispatch } from "react-redux";
import { closeSettings } from "./store/redux/settingsTrigger";

import { useCallback, useMemo, useRef, useState } from "react";
import SettingsDetails from "./sheets/SettingsDetails";

function MainRouter() {
  const bottomSheetRef = useRef(null);
  const [indexState, setIndexState] = useState(-1);
  const snapPoints = useMemo(() => ["90%"], []);
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  async function settingsNavigateHandler() {
    dispatch(closeSettings());
  }

  store.subscribe(() => {
    let settings = store.getState().settings;
    if (settings.value == true) {
      setIndexState(0);
    }
  });

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        style={[props.style]}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    []
  );

  return (
    <>
      <GestureHandlerRootView>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: Colors.background500 },
              animation: "none",
            }}
          >
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Gameplay" component={GameplayScreen} />
            <Stack.Screen name="HerosJourney" component={HerosJourneyScreen} />
            <Stack.Screen name="Archetypes" component={ArchetypesScreen} />
            <Stack.Screen name="Achievements" component={AchievementsScreen} />
            <Stack.Screen name="Gallery" component={GalleryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <BottomSheet
          ref={bottomSheetRef}
          index={indexState}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => {
            setIndexState(-1);
            settingsNavigateHandler();
          }}
          handleStyle={[styles.sheetHandler]}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView style={styles.sheetContainer}>
            <SettingsDetails />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </>
  );
}

export default MainRouter;

const styles = StyleSheet.create({
  sheetHandler: {
    backgroundColor: Colors.background500,
  },
  sheetContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background500,
  },
});
