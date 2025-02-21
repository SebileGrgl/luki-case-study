import { ScrollView, StyleSheet, View } from "react-native";
import StatisticsContainer from "@/components/profilePage/StatisticsContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProfilePhoto from "@/components/Photo";
import UserName from "@/components/UserName";
import BadgesSection from "@/components/profilePage/BadgesSection";
import UserDetails from "@/components/profilePage/UserDetails";
import DirectionTags from "@/components/profilePage/DirectionTags";
import StoriesContainer from "@/components/profilePage/StoriesContainer";
import FilterOptions from "@/components/profilePage/FilterOptions";
import PostsContainer from "@/components/profilePage/PostsContainer";
import CallButtons from "@/components/profilePage/CallButtons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.paddingContainer}>
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
          <UserDetails user={user} />
          <DirectionTags />
          <StoriesContainer />
          <FilterOptions />
        </View>
        <PostsContainer posts={user.photos} />
      </ScrollView>
      <CallButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingContainer: {
    paddingHorizontal: 20,
  },
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
