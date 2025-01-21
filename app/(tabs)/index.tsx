import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { useScrollStore } from "@/store/useScrollStore";

const data = Array(30)
  .fill(null)
  .map((_, i) => ({ id: String(i), name: `Item ${i + 1}` }));

export default function Screen1() {
  const handleScroll = useScrollStore((state) => state.handleScroll); // Access handleScroll

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      )}
      onScroll={(e) => handleScroll(e.nativeEvent.contentOffset.y)} // Call handleScroll
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingTop: 150, // Space for header (100) + TabBar (50)
      }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: "lightgray",
    marginBottom: 10,
    borderRadius: 10,
  },
});
