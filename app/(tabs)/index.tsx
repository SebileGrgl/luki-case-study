import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { Link } from "expo-router";
import StatisticsContainer from "@/components/StatisticsContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProfilePhoto from "@/components/Photo";
import UserName from "@/components/UserName";
import BadgesSection from "@/components/BadgesSection";

export default function HomeScreen() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <SafeAreaView>
      <View style={styles.row1}>
        <View style={styles.statistics}>
          <StatisticsContainer user={user} />
        </View>
        <View style={styles.profilePhoto}>
          <ProfilePhoto imageUrl={user.pp} />
        </View>
      </View>
      <View style={styles.row2}>
        <UserName userName={user.username} isVerified={user.isVerified} />
        <BadgesSection user={user} />
      </View>
      <Link href="./biography">Biography</Link>
      <Link href="./editProfile">Edit Profile</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row1: {
    flexDirection: "row",
    alignItems: "center",
  },
  row2: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statistics: {
    width: "60%",
  },
  profilePhoto: {
    width: "40%",
    alignItems: "flex-end",
  },
});
