import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InformationRow from "./InformationRow";
import { User } from "@/utils/types";
import { userInformationTags } from "@/constants/userInformationTags";

const InformationsContainer = ({ user }: { user: User }) => {
  return (
    <View style={styles.container}>
      <Text>{user.hobbies}</Text>
      {userInformationTags.map((item) => (
        <InformationRow
          icon={item.icon}
          title={item.title}
          text={user[item.key as keyof User]}
        />
      ))}
    </View>
  );
};

export default InformationsContainer;

const styles = StyleSheet.create({
  container: {
    gap: 30,
    marginTop: 40,
  },
});
