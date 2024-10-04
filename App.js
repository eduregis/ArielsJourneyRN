import { StatusBar } from "expo-status-bar";
import { Settings, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "./constants/colors";
import { useFonts } from "expo-font";

import MenuScreen from "./screens/Menu";
import GameplayScreen from "./screens/Gameplay";
import HerosJourneyScreen from "./screens/HerosJourney";
import ArchetypesScreen from "./screens/Archetypes";
import AchievementsScreen from "./screens/Achievements";
import store from "./store/redux/store";
import { Provider } from "react-redux";
import { useCallback, useMemo, useRef, useState } from "react";
import SettingsDetails from "./sheets/SettingsDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "macondo-regular": require("./assets/fonts/Macondo-Regular.ttf"),
  });
  const bottomSheetRef = useRef(null);
  const [indexState, setIndexState] = useState(-1);
  const snapPoints = useMemo(() => ["90%"], []);

  store.subscribe(() => {
    setIndexState(0);
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
      <Provider store={store}>
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
              <Stack.Screen
                name="HerosJourney"
                component={HerosJourneyScreen}
              />
              <Stack.Screen name="Archetypes" component={ArchetypesScreen} />
              <Stack.Screen
                name="Achievements"
                component={AchievementsScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <BottomSheet
            ref={bottomSheetRef}
            index={indexState}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={() => {
              setIndexState(-1);
            }}
            handleStyle={[styles.sheetHandler]}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView style={styles.sheetContainer}>
              <SettingsDetails />
            </BottomSheetView>
          </BottomSheet>
        </GestureHandlerRootView>
      </Provider>
    </>
  );
}

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
