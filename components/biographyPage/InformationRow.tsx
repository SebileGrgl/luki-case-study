import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { InformationRowProps } from "@/utils/types";
import { countries } from "@/constants/countries";

const InformationRow = ({ icon, title, text }: InformationRowProps) => {
  const findIcon = () => {
    const country = countries.find((item) => item.name === text);
    return country?.icon;
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        {text === "Türkiye" && (
          <Image style={styles.icon} source={findIcon()} />
        )}
      </View>
    </View>
  );
};

export default InformationRow;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
  },
  textContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    fontWeight: 400,
  },
  icon: {
    width: 18,
    height: 18,
  },
});
