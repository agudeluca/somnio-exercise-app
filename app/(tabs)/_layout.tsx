import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions
} from "@react-navigation/material-top-tabs"
import { ParamListBase, TabNavigationState } from "@react-navigation/native"
import { withLayoutContext } from "expo-router"
import { View, Text, Animated } from "react-native"
import { useScrollStore } from "@/store/useScrollStore"
import Header from "@/components/Header"
import React from "react"
import Home from "./index"
import YourPosts from "./your-posts"
const { Navigator } = createMaterialTopTabNavigator()

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator)

export default function Layout() {
  return (
    <>
      <Header />
      <MaterialTopTabs
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold"
          },
          tabBarStyle: {
            marginTop: 100 // Ensure TabBar adjusts for header height
          }
        }}
      >
        <MaterialTopTabs.Screen
          name="index"
          options={{
            title: "Posts"
          }}
        />

        <MaterialTopTabs.Screen
          name="your-posts"
          options={{
            title: "Your Posts"
          }}
        />
      </MaterialTopTabs>
    </>
  )
}
