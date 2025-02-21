import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import GroupCircle from "./GroupCircle";
import Feather from "@expo/vector-icons/Feather";

const StoriesContainer = () => {
  return (
    <View style={{ marginTop: 25 }}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={({ item }) => <GroupCircle />}
        keyExtractor={(item) => item.toString()}
        horizontal
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        ListHeaderComponent={() => (
          <View style={styles.listHeader}>
            <Feather name="plus" size={34} color="black" />
          </View>
        )}
      />
    </View>
  );
};

export default StoriesContainer;

const styles = StyleSheet.create({
  seperator: {
    width: 20,
  },
  listHeader: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "#E1E1E1",
    borderRadius: 30,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
