import React from "react"
import { Text, StyleSheet, View } from "react-native"
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui"
import { usePathname } from "expo-router"
import Header from "@/components/Header"
import { useScrollStore } from "@/store/useScrollStore"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { ThemedText } from "@/components/ThemedText"

const SelectableTab = ({
  name,
  isSelected,
  icon
}: {
  icon: "list" | "home"
  name: string
  isSelected: boolean
}) => {
  return (
    <View style={styles.bottomTabContainer}>
      {isSelected && (
        <View
          style={{
            height: 1,
            width: 30,
            backgroundColor: "white",
            borderRadius: 2,
            top: -5,
            position: "absolute",
          }}
        />
      )}
      <Ionicons name={icon} size={30} color="white" />
      <ThemedText style={styles.bottonTabText}>{name}</ThemedText>
    </View>
  )
}

export default function Layout() {
  const resetHeaderPosition = useScrollStore(
    (state) => state.resetHeaderPosition
  )
  const pathname = usePathname() // Returns an array of route segments
  const insets = useSafeAreaInsets()
  const handleResetHeaderPosition = (clickedPath: string) => {
    if (clickedPath === pathname) return
    resetHeaderPosition()
  }
  return (
    <>
      <Header />
      <Tabs>
        <TabSlot />
        <TabList
          style={[
            styles.tabList,
            {
              height: insets.bottom + 55
            }
          ]}
        >
          <TabTrigger
            onPress={() => handleResetHeaderPosition("/")}
            name="home"
            href="/"
          >
            <SelectableTab
              name="Posts"
              isSelected={pathname === "/"}
              icon="list"
            />
          </TabTrigger>
          <TabTrigger
            onPress={() => handleResetHeaderPosition("/your-posts")}
            name="article"
            href="/your-posts"
          >
            <SelectableTab
              name="Your Posts"
              isSelected={pathname === "/your-posts"}
              icon="home"
            />
          </TabTrigger>
        </TabList>
      </Tabs>
    </>
  )
}

const styles = StyleSheet.create({
  tabList: {
    backgroundColor: Colors.light.tint,
    justifyContent: "space-around",
    alignContent: "center",
    padding: 20
  },
  bottonTabText: {
    color: "white",
    fontSize: 12
  },
  bottomTabContainer: {
    alignItems: "center"
  }
})
