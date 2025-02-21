import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InfoTag from "./InfoTag";
import { InfoTagsContainerProps } from "@/utils/types";
import { signs } from "@/constants/signs";
import { countries } from "@/constants/countries";

const InfoTagsContainer = ({ nationality, sign }: InfoTagsContainerProps) => {
  const userSign = signs.find((item) => item.name === sign);
  const userNationality = countries.find((item) => item.name === nationality);

  return (
    <View style={styles.container}>
      {userSign && <InfoTag icon={userSign.icon} text={userSign.name} />}
      {userNationality && (
        <InfoTag icon={userNationality.icon} text={userNationality.name} />
      )}
    </View>
  );
};

export default InfoTagsContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },
});
