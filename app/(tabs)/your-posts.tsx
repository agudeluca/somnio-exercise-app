import React from "react"
import { FlatList, StyleSheet } from "react-native"
import { useScrollStore } from "@/store/useScrollStore"
import useGetPostByUserId from "@/hooks/queries/useGetPostByUserId"
import { useUser } from "@/context/UserProvider"
import renderItem from "./item"

export default function YourPosts() {
  const handleScroll = useScrollStore((state) => state.handleScroll)
  const { userId } = useUser()
  const { data } = useGetPostByUserId(userId)

  return (
    <FlatList
      data={data}
      style={styles.list}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, ...data }) => renderItem({ item, ...data, userId })}
      onScroll={(e) => handleScroll(e.nativeEvent.contentOffset.y)}
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingTop: 20
      }}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: "lightgray",
    marginBottom: 10,
    borderRadius: 10
  },
  list: {
    backgroundColor: "white"
  }
})
