import CustomBackButton from "@/components/CustomBackButton";
import { Stack } from "expo-router";
import React from "react";
export default function TabLayout() {
  return (
    <Stack screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="biography"
        options={{
          headerTitle: "",
          headerTransparent: true,

          headerLeft: () => <CustomBackButton />,
        }}
      />
      <Stack.Screen
        name="editProfile"
        options={{
          headerTitle: "",
          headerTransparent: true,

          headerLeft: () => <CustomBackButton />,
        }}
      />
    </Stack>
  );
}
