import { Stack } from "expo-router";
import React from "react";
export default function TabLayout() {
  return (
    <Stack screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="biography" options={{ headerTitle: "Biography" }} />
      <Stack.Screen
        name="editProfile"
        options={{ headerTitle: "Edit Profile" }}
      />
    </Stack>
  );
}
