import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InfoTagsContainer from "./InfoTagsContainer";
import { User } from "@/utils/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

const UserDetails = ({ user }: { user: User }) => {
  return (
    <View style={styles.container}>
      <InfoTagsContainer nationality={user.nationality} sign={user.sign} />
      <Text>{user.hobbies}</Text>
      <Link href="/biography" style={styles.rightIcon}>
        <AntDesign name="right" size={24} color="black" />
      </Link>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 20,
    backgroundColor: "#E1E1E1",
    borderRadius: 9,
    gap: 15,
  },

  rightIcon: {
    position: "absolute",
    right: 30,
    top: "60%",
  },
});
