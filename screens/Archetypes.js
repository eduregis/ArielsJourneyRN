import { ScrollView, StyleSheet, View, Image } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";
import ArchetypeCard from "../components/ArchetypeCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import DetailsSheet from "../sheets/HerosJourneyDetails";
import { Colors } from "../constants/colors";
import { ARCHETYPES } from "../models/archetypes";

function ArchetypesScreen({ navigation }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const bottomSheetRef = useRef(null);
  const [indexState, setIndexState] = useState(-1);
  const snapPoints = useMemo(() => ["80%"], []);
  const data = ARCHETYPES;

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
        <CustomNavigationBar title="Arquétipos" backHandler={backToMenu} />
        <View style={styles.menuContainer}>
          <ScrollView horizontal={true}>
            {data.map((item, cardIndex) => {
              return (
                <ArchetypeCard
                  title={item.archetypeStage}
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
            <DetailsSheet index={selectedCardIndex} />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </>
  );
}

export default ArchetypesScreen;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
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
