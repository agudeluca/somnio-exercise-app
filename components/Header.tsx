import React from "react";
import { Text, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useScrollStore } from "@/store/useScrollStore";

const AnimatedHeader = () => {
  const top = useScrollStore((state) => state.top); // Access SharedValue

  // Use `top.value` in the animated style
  const headerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: top.value }],
  }));

  return (
    <Animated.View style={[styles.header, headerStyle]}>
      <Text style={styles.headerTitle}>Header</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AnimatedHeader;
