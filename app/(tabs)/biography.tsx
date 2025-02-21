import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Photo from "@/components/Photo";
import UserName from "@/components/UserName";
import InformationsContainer from "@/components/biographyPage/InformationsContainer";

const Biography = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <SafeAreaView style={{ paddingHorizontal: 25 }}>
      <View style={styles.imageContainer}>
        <Photo imageUrl={user.pp} />
        <UserName userName={user.username} isVerified={true} />
      </View>
      <InformationsContainer user={user} />
    </SafeAreaView>
  );
};

export default Biography;

const styles = StyleSheet.create({
  imageContainer: {
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
