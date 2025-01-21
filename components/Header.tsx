import React from "react"
import { StyleSheet } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useScrollStore } from "@/store/useScrollStore"
import { usePathname } from 'expo-router'

const AnimatedHeader = () => {
  const top = useScrollStore((state) => state.top)
  const pathname = usePathname()
  const headerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: top.value }]
  }))
  const insets = useSafeAreaInsets()
  const textStyle = useAnimatedStyle(() => {
    // Fade out the text when the header moves up
    const opacity = 1 - Math.min(Math.abs(top.value) / 50, 1) // Adjust threshold (50) as needed
    return { opacity }
  })

  return (
    <Animated.View
      style={[
        styles.header,
        headerStyle,
        {
          paddingTop: 10 + insets.top,
          height: 80 + insets.top
        }
      ]}
    >
      <Animated.Text style={[textStyle, styles.headerTitle]}>
        {
          pathname === "/" ? "Blog" : "Your Posts"
        }
      </Animated.Text>
      <Animated.Text style={[textStyle, styles.headerSubTitle]}>Available Posts</Animated.Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "white",
    padding: 20,
    zIndex: 10
  },
  headerTitle: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: "bold",
    fontFamily: "Montserrat"
  },
  headerSubTitle: {
    fontSize: 15,
    color: "gray",
    fontFamily: "Montserrat"
  }
})

export default AnimatedHeader
