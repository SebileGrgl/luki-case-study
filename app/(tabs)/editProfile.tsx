import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Photo from "@/components/Photo";
import EditContainer from "@/components/editProfile/EditContainer";

const EditProfile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <SafeAreaView style={{ paddingHorizontal: 25 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Photo imageUrl={user.pp} />
          <Text style={styles.editTitle}>Profil Resmini Düzenle</Text>
        </View>
        <EditContainer user={user} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imageContainer: {
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  editTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
});
