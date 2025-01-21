import React from "react"
import { StyleSheet, Text } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useScrollStore } from "@/store/useScrollStore"
import { usePathname } from "expo-router"
import { Colors } from "@/constants/Colors"

const AnimatedHeader = () => {
  const top = useScrollStore((state) => state.top)
  const pathname = usePathname()
  const insets = useSafeAreaInsets()

  // Animated styles for height and opacity
  const headerStyle = useAnimatedStyle(() => {
    const translateY = Math.max(top.value, -80) // Adjust threshold for hiding
    const height = Math.max(80 + insets.top + translateY, 0) // Reduce height to 0
    return {
      transform: [{ translateY }],
      height // Dynamically adjust height
    }
  })

  const textStyle = useAnimatedStyle(() => {
    const opacity = 1 - Math.min(Math.abs(top.value) / 80, 1) // Adjust opacity
    return { opacity }
  })

  return (
    <Animated.View style={[styles.header, headerStyle]}>
      <Text
        style={[
          styles.headerTitle,
          {
            marginTop: insets.top
          }
        ]}
      >
        {pathname === "/" ? "Blog" : "Your Posts"}
      </Text>
      <Text style={[textStyle, styles.headerSubTitle]}>Available Posts</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    overflow: "hidden",
    alignContent: "flex-end",
    backgroundColor: Colors.light.tint
  },
  headerTitle: {
    fontSize: 25,
    marginBottom: 5,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat"
  },
  headerSubTitle: {
    fontSize: 15,

    color: "white",
    fontFamily: "Montserrat"
  }
})

export default AnimatedHeader
