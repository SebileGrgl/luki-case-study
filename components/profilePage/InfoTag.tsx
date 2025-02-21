import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { InfoTagProp } from "@/utils/types";

const InfoTag = ({ icon, text }: InfoTagProp) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InfoTag;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    padding: 5,
    borderWidth: 0.2,
    width: 90,
    borderRadius: 5,
    borderColor: "#7f8c8d",
  },

  icon: {
    width: 12,
    height: 12,
  },
  text: {
    fontSize: 11,
    fontWeight: 600,
  },
});
