import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { badgeProps } from "@/utils/types";

const Badge = ({ icon, text, color }: badgeProps) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Image style={styles.badgeIcon} source={icon} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    borderRadius: 29,
    flexDirection: "row",
    alignItems: "center",
  },
  badgeIcon: {
    width: 15,
    marginRight: 4,
  },
  text: {
    color: "white",
    fontSize: 11,
    fontWeight: 700,
  },
});
