import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { ARCHETYPES } from "../models/archetypes";
import { Colors } from "../constants/constants";
import ArchetypeCard from "../components/ArchetypeCard";

function ArchetypesDetailsSheet({ index }) {
  var card = ARCHETYPES[index];

  useEffect(() => {
    // console.log(index);
  }, [index]);

  var selectedCardImage = <View />;
  var selectedCardDescription = <View />;

  if (index != null) {
    selectedCardImage = (
      <ArchetypeCard
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
        <View style={styles.adornmentsContainer}>
          <Image
            style={styles.adornments}
            source={require("../assets/ui/Ariel_adornment.png")}
          />
          <Text style={styles.title}>{card.archetypeStage}</Text>
          <Image
            style={styles.adornments}
            source={require("../assets/ui/Ariel_adornment.png")}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.cardContainer}>{selectedCardImage}</View>
          <Text style={styles.description}>{card.descriptionText}</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>{selectedCardDescription}</View>
    </>
  );
}

export default ArchetypesDetailsSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    flexDirection: "row",
  },
  adornmentsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "macondo-regular",
    textAlign: "center",
    marginHorizontal: 54,
  },
  adornments: {
    width: 191,
    height: 23,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  cardContainer: {
    flex: 1,
    marginRight: 32,
  },
  description: {
    flex: 3,
    marginTop: 16,
    color: Colors.primary300,
    fontSize: 16,
    textAlign: "center",
  },
});
