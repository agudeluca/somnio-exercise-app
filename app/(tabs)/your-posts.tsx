import { StyleSheet, Text, View, FlatList } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import useGetPostByUserId from "@/hooks/queries/useGetPostByUserId"
import { useUser } from "@/context/UserProvider"

export default function Page() {
  const { userId } = useUser()
  const { data } = useGetPostByUserId(userId)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={(item) => <Text>{item.item.title}</Text>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
