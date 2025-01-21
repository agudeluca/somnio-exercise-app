import React from "react"
import { FlatList, StyleSheet } from "react-native"
import { useScrollStore } from "@/store/useScrollStore"
import useGetPost from "@/hooks/queries/useGetPosts"

import renderItem from "./item"
import { useUser } from "@/context/UserProvider"

export default function Posts() {
  const handleScroll = useScrollStore((state) => state.handleScroll)
  const { data } = useGetPost()
  const { userId } = useUser()
  return (
    <FlatList
      data={data?.reverse()} // reverse just to show communities tag instead of user tag
      style={styles.list}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => renderItem({ item, userId })}
      onScroll={(e) => handleScroll(e.nativeEvent.contentOffset.y)}
      extraData={{
        test: "test"
      }}
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingTop: 20
      }}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
  }
})
