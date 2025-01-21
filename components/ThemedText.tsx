import { Text, type TextProps, StyleSheet } from "react-native"

import { useThemeColor } from "@/hooks/useThemeColor"

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  type?: "default" | "title" | "subtitle" | "link"
}

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
        {
          fontFamily: "Montserrat"
        }
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 18
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4"
  }
})
