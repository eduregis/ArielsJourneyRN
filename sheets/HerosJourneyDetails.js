import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import HerosJourneyCard from "../components/HerosJourneyCard";
import { HEROS_JOURNEY } from "../models/herosJourney";
import { Colors } from "../constants/colors";

function HerosJourneyDetailsSheet({ index }) {
  var card = HEROS_JOURNEY[index];

  useEffect(() => {
    console.log(index);
  }, [index]);

  var selectedCardImage = <View />;
  var selectedCardDescription = <View />;

  if (index != null) {
    selectedCardImage = (
      <HerosJourneyCard
        cardId={index}
        active={true}
        pressable={false}
        exhibition={true}
      />
    );
  }

  if (index != null) {
    selectedCardDescription = (
      <View>
        <Text style={styles.title}>{card.herosJourneysStage}</Text>
        <View style={styles.adornmentsContainer}>
          <Image
            style={styles.adornments}
            source={require("../assets/ui/Ariel_adornment.png")}
          />
          <Image
            style={styles.adornments}
            source={require("../assets/ui/Ariel_adornment.png")}
          />
        </View>
        <Text style={styles.description}>{card.descriptionText}</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cardContainer}>{selectedCardImage}</View>
        <View style={styles.descriptionContainer}>
          {selectedCardDescription}
        </View>
      </View>
    </>
  );
}

export default HerosJourneyDetailsSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    flexDirection: "row",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    color: Colors.primary300,
    fontSize: 21,
    fontFamily: "macondo-regular",
    textAlign: "center",
    paddingTop: 12,
  },
  adornmentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginBottom: 16,
  },
  adornments: {
    width: 191,
    height: 23,
  },
  description: {
    color: Colors.primary300,
    fontSize: 16,
    textAlign: "center",
  },
});
