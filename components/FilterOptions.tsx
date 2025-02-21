import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const FilterOptions = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/images-icon.png")} />
      <Image source={require("@/assets/images/reel-icon.png")} />
      <Image source={require("@/assets/images/align-icon.png")} />
    </View>
  );
};

export default FilterOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 45,
  },
});
