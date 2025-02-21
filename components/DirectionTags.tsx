import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const DirectionTags = () => {
  return (
    <View style={styles.container}>
      <Link href="/editProfile" style={styles.directionTag}>
        <Text style={styles.text}>Profili Düzenle</Text>
      </Link>

      <Link href="/+not-found" style={styles.directionTag}>
        <Text style={styles.text}>Profili Paylaş</Text>
      </Link>
    </View>
  );
};

export default DirectionTags;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  directionTag: {
    backgroundColor: "#E1E1E1",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 9,
  },
  text: {
    fontSize: 14,
    fontWeight: 700,
  },
});
