import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { Post } from "@/types"
import { Colors } from "@/constants/Colors"

const renderItem = ({ item, userId }: { item: Post; userId?: number }) => {
  return (
    <View style={styles.item}>
      {userId !== item.userId ? (
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>Community</Text>
        </View>
      ) : (
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>You</Text>
        </View>
      )}

      <ThemedText style={styles.title}>{item.title}</ThemedText>
      <ThemedText style={styles.subtitle}>{item.body}</ThemedText>

      <ThemedText onPress={() => {}} type="link">
        Read More ---→
      </ThemedText>
    </View>
  )
}

export default renderItem

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  tag: {
    color: "#fff",
    backgroundColor: Colors.light.secondary,
    marginBottom: 10,
    padding: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontFamily: "Montserrat",
    fontSize: 12
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20
  },
  subtitle: {
    marginBottom: 10
  },
  item: {
    padding: 20,
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 10,
    fontFamily: "Montserrat"
  }
})
