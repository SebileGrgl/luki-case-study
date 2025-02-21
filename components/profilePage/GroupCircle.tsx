import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GroupCircle = () => {
  return <View style={styles.container}></View>;
};

export default GroupCircle;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "#E1E1E1",
    borderRadius: 30,
  },
});
