import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { User } from "@/utils/types";
import { userInformationTags } from "@/constants/userInformationTags";
import EditInfoRow from "./EditInfoRow";
import { editProfileTags } from "@/constants/editProfileTags";

const EditContainer = ({ user }: { user: User }) => {
  return (
    <View style={styles.container}>
      {userInformationTags.map((item) => (
        <View key={item.key}>
          <EditInfoRow
            icon={item.icon}
            title={item.title}
            text={user[item.key as keyof User]}
            keyValue={item.key as keyof User}
          />
        </View>
      ))}
      {editProfileTags.map((item) => (
        <View key={item.key}>
          <EditInfoRow
            icon={item.icon}
            title={item.title}
            text={user[item.key as keyof User]}
            keyValue={item.key as keyof User}
          />
        </View>
      ))}
    </View>
  );
};

export default EditContainer;

const styles = StyleSheet.create({
  container: {
    gap: 30,
    marginTop: 40,
  },
  row: {},
});
