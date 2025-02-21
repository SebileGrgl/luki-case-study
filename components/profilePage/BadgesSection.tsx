import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { User } from "@/utils/types";
import { membershipBadges } from "@/constants/membershipBadges";
import Badge from "./Badge";
import genderBadges from "@/constants/genderBadges";

const BadgesSection = ({ user }: { user: User }) => {
  const membershipLevel = membershipBadges.find(
    (item) => item.name === user.membershipLevel
  ) || {
    icon: require("@/assets/images/error-badge.png"),
    name: "",
    color: "gray",
  };

  const gender = genderBadges.find((item) => item.name === user.gender) || {
    icon: require("@/assets/images/error-badge.png"),
    name: "",
    color: "gray",
  };

  const calculateAge = (birthDate: string) => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
    return age;
  };
  return (
    <View style={styles.flexContainer}>
      <Badge
        icon={gender.icon}
        text={calculateAge(user.dob).toString()}
        color={gender?.color}
      />
      <Badge
        icon={require("@/assets/images/diamond-icon.png")}
        text={user.diamonds.toString()}
        color={"#27ae60"}
      />
      <Badge
        icon={membershipLevel.icon}
        text={user.membershipLevel}
        color={membershipLevel.color}
      />
    </View>
  );
};

export default BadgesSection;

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    height: 21,
    gap: 5,
  },
});
