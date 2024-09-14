import { ScrollView, StyleSheet, View, Image } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import HerosJourneyCard from "../components/HerosJourneyCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import HerosJourneyDetailsSheet from "../sheets/HerosJourneyDetails";
import { Colors } from "../constants/colors";
import { HEROS_JOURNEY } from "../models/herosJourney";

function HerosJourney({ navigation }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const bottomSheetRef = useRef(null);
  const [indexState, setIndexState] = useState(-1);
  const snapPoints = useMemo(() => ["80%"], []);
  const data = HEROS_JOURNEY;

  function backToMenu() {
    navigation.navigate("Menu");
  }

  function showDetail(index) {
    setIndexState(0);
    setSelectedCardIndex(index);
  }

  useEffect(() => {
    if (selectedCardIndex != null) {
      bottomSheetRef.current?.expand();
    }
  }, [selectedCardIndex]);

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
        <CustomNavigationBar
          title="Jornada do Herói"
          backHandler={backToMenu}
        />
        <View style={styles.menuContainer}>
          <ScrollView horizontal={true}>
            <Image
              source={require("../assets/ui/Ariel_arrow_back_heros_journey.png")}
              resizeMode="cover"
              style={styles.backArrow}
            />

            {data.map((item, cardIndex) => {
              return (
                <HerosJourneyCard
                  title={item.herosJourneysStage}
                  image={item.imageName}
                  active={cardIndex < 2}
                  number={cardIndex}
                  onPress={() => {
                    showDetail(cardIndex);
                  }}
                  key={cardIndex}
                />
              );
            })}
            <Image
              source={require("../assets/ui/Ariel_arrow_front_heros_journey.png")}
              resizeMode="cover"
              style={styles.frontArrow}
            />
          </ScrollView>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={indexState}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => {
            setSelectedCardIndex(null);
          }}
          handleStyle={[styles.sheetHandler]}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView style={styles.sheetContainer}>
            <HerosJourneyDetailsSheet index={selectedCardIndex} />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </>
  );
}

export default HerosJourney;

const styles = StyleSheet.create({
  backArrow: {
    marginTop: 76.5,
    width: 33,
    height: 106,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  frontArrow: {
    marginTop: 77.5,
    width: 67,
    height: 106,
  },
  sheetHandler: {
    backgroundColor: Colors.background500,
  },
  sheetContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background500,
  },
});
