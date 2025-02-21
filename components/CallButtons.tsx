import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CallButtons = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/video-call-icon.png")} />
      <Image source={require("@/assets/images/voice-call-icon.png")} />
    </View>
  );
};

export default CallButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "sticky",
    bottom: 100,
  },
});
