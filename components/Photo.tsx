import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Photo = ({ imageUrl }: any) => {
  return (
    <View style={styles.circle}>
      <Image
        style={styles.profilePhoto}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  circle: {
    width: 103,
    height: 103,
    borderRadius: "50%",
    overflow: "hidden",
  },
  profilePhoto: {
    width: "100%",
    height: "100%",
  },
});
