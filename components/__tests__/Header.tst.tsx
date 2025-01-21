import React from "react";
import { render } from "@testing-library/react-native";
import AnimatedHeader from "../Header";

jest.mock("react-native-safe-area-context", () => {
  const SafeAreaContext = jest.requireActual("react-native-safe-area-context");
  return {
    ...SafeAreaContext,
    useSafeAreaInsets: jest.fn(() => ({ top: 20 })),
  };
});

jest.mock("expo-router", () => ({
  usePathname: jest.fn(),
}));

jest.mock("@/store/useScrollStore", () => ({
  useScrollStore: jest.fn(() => ({
    top: { value: 0 }, // Mock initial animated value
    handleScroll: jest.fn(),
  })),
}));

describe("AnimatedHeader Component", () => {
  it("renders the correct title for the root path", () => {
    // Mock the pathname for "/"
    require("expo-router").usePathname.mockReturnValue("/");

    const { getByText } = render(<AnimatedHeader />);

    expect(getByText("Blog")).toBeTruthy();
    expect(getByText("Available Posts")).toBeTruthy();
  });

  it("renders 'Your Posts' title when pathname is '/your-posts'", () => {
    // Mock the pathname for "/your-posts"
    require("expo-router").usePathname.mockReturnValue("/your-posts");

    const { getByText } = render(<AnimatedHeader />);

    expect(getByText("Your Posts")).toBeTruthy();
    expect(getByText("Available Posts")).toBeTruthy();
  });
});
