import { create } from "zustand";
import { withSpring } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";

// Zustand store with proper SharedValue initialization
export const useScrollStore = create(() => {
  const top = useSharedValue(0); // SharedValue for header animation

  return {
    scrollY: 0, // Regular scroll position
    top, // SharedValue for header position
    handleScroll: (y) => {
      const scrollingDown = y > top.value;

      // Update SharedValue
      top.value = scrollingDown && y > 50
        ? withSpring(-100, { damping: 16 }) // Hide header
        : withSpring(0, { damping: 16 });  // Show header
    },
  };
});
