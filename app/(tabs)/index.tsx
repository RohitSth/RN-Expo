import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import pokemonList from "@/data.json";

const ItemSeparator = () => <View style={{ height: 16 }} />;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Recommended Way */}
      <View style={styles.scrollView}>
        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          data={pokemonList}
          // data={[]}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text>{item.type}</Text>
              </View>
            );
          }}
          // horizontal={true}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyContainerText}>No Items Found</Text>
            </View>
          }
        />
      </View>

      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.name}</Text>
              <Text>{pokemon.type}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
