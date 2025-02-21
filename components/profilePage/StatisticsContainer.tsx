import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatisticsContainerProps } from "@/utils/types";
import Statistic from "./Statistic";

const StatisticsContainer = ({ user }: StatisticsContainerProps) => {
  return (
    <View style={styles.container}>
      <Statistic count={user.following} param="Takip" />
      <Statistic count={user.followers} param="Takipçi" />
      <Statistic count={user.followers} param="Gönderi" />
    </View>
  );
};

export default StatisticsContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
