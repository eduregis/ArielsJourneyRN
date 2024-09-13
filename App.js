import { StatusBar } from "expo-status-bar";
import { Settings, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./constants/colors";
import { useFonts } from "expo-font";

import MenuScreen from "./screens/Menu";
import GameplayScreen from "./screens/Gameplay";
import HerosJourneyScreen from "./screens/HerosJourney";
import ArchetypesScreen from "./screens/Archetypes";
import AchievementsScreen from "./screens/Achievements";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "macondo-regular": require("./assets/fonts/Macondo-Regular.ttf"),
  });

  return (
    <>
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
