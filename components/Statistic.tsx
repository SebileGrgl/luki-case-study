import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { statisticProp } from "@/utils/types";

const Statistic = ({ param, count }: statisticProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.param}>{param}</Text>
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  count: {
    fontSize: 18,
    fontWeight: 700,
  },
  param: {
    fontSize: 16,
  },
});
