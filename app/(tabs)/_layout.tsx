import React from "react"
import { StyleSheet, View } from "react-native"
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui"
import { usePathname } from "expo-router"
import Header from "@/components/Header"
import { useScrollStore } from "@/store/useScrollStore"

import { Colors } from "@/constants/Colors"
import { ThemedText } from "@/components/ThemedText"

const SelectableTab = ({
  name,
  isSelected
}: {
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
            position: "absolute"
          }}
        />
      )}
      <ThemedText style={styles.bottonTabText}>{name}</ThemedText>
    </View>
  )
}

export default function Layout() {
  const resetHeaderPosition = useScrollStore(
    (state) => state.resetHeaderPosition
  )
  const pathname = usePathname()

  const handleResetHeaderPosition = (clickedPath: string) => {
    if (clickedPath === pathname) return
    resetHeaderPosition()
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light.tint
      }}
    >
      <Header />
      <Tabs>
        <TabList style={styles.tabList}>
          <TabTrigger
            style={{
              backgroundColor: Colors.light.tint
            }}
            onPress={() => handleResetHeaderPosition("/")}
            name="home"
            href="/"
          >
            <SelectableTab name="Posts" isSelected={pathname === "/"} />
          </TabTrigger>
          <TabTrigger
            onPress={() => handleResetHeaderPosition("/your-posts")}
            name="article"
            href="/your-posts"
          >
            <SelectableTab
              name="Your Posts"
              isSelected={pathname === "/your-posts"}
            />
          </TabTrigger>
        </TabList>
        <TabSlot />
      </Tabs>
    </View>
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
    fontSize: 14
  },
  bottomTabContainer: {
    alignItems: "center"
  }
})
