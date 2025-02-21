import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

const PostsContainer = ({ posts }: { posts: string[] }) => {
  return (
    <View>
      <FlatList
        style={styles.container}
        data={posts}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.post}
              source={{ uri: item }}
              resizeMode="cover"
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
        numColumns={3}
        columnWrapperStyle={{ gap: 1 }}
        keyExtractor={(index) => index}
        scrollEnabled={false}
      />
    </View>
  );
};

export default PostsContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 18,
  },
  post: {
    height: 140,
    flex: 1,
  },
  seperator: {
    height: 1,
  },
});
