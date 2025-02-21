import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { UserNameProps } from "@/utils/types";

const UserName = ({ userName, isVerified }: UserNameProps) => {
  return (
    <View style={styles.flexBox}>
      <Text style={styles.userName}>{userName}</Text>
      {isVerified && (
        <Image source={require("@/assets/images/verification-badge.png")} />
      )}
    </View>
  );
};

export default UserName;

const styles = StyleSheet.create({
  flexBox: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: 600,
  },
});
