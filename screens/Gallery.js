import { View, Text, FlatList, StyleSheet, Dimensions, ImageBackground } from "react-native";
import CustomNavigationBar from "../components/CustomNavigationBar";

function GalleryScreen({ navigation }) {
  function backToMenu() {
    navigation.navigate("Menu");
  }

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 1' },
    { id: '8', title: 'Item 2' },
    { id: '9', title: 'Item 3' },
    { id: '10', title: 'Item 4' },
    { id: '11', title: 'Item 5' },
    { id: '12', title: 'Item 6' }
  ];

  // Agrupar itens em pares (duas células por coluna)
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push([data[i], data[i + 1]]);
  }

  // Renderizar cada "linha" de duas células
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      {item.map((cell) => (
        <ImageBackground 
          key={cell.id} 
          style={styles.item}
          source={require("../assets/ui/Ariel_choice_card_back.png")}
          resizeMode="contain"
        >
          <Text style={styles.title}></Text>
        </ImageBackground>
      ))}
    </View>
  );


  return (
    <>
      <CustomNavigationBar title="Galeria" backHandler={backToMenu} />
      <View style={styles.container}>
        <FlatList
          data={groupedData}
          renderItem={renderRow}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    height: '100%',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    flex: 1,
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
  },
});
