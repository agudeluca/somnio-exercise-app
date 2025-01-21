/* jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // Mock `useAnimatedStyle` to return a valid style
  Reanimated.useAnimatedStyle = jest.fn((callback) => callback());

  return Reanimated;
});

jest.mock("react-native-safe-area-context", () => {
  const SafeAreaContext = jest.requireActual("react-native-safe-area-context");
  return {
    ...SafeAreaContext,
    useSafeAreaInsets: jest.fn(() => ({ top: 20 })),
  };
});

jest.mock("expo-router", () => ({
  usePathname: jest.fn(() => "/"), // Mock the path as "/"
}));

jest.mock("@/store/useScrollStore", () => ({
  useScrollStore: jest.fn(() => ({
    top: { value: 0 }, // Mock initial animated value
  })),
}));

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // Mock useSharedValue to return a simple object
  Reanimated.useSharedValue = jest.fn((initialValue) => ({
    value: initialValue,
  }));

  return Reanimated;
});
 */
