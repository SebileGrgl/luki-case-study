import { StyleSheet, SafeAreaView, View } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Link href="./biography">Biography</Link>
      <Link href="./editProfile">Edit Profile</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
