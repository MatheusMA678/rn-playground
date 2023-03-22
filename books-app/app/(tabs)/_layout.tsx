import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { BottomNavBar, HeaderLeft, HeaderRight } from "../../components/layout";
import React from "react";
import { Animated } from "react-native/types";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#212121",
          paddingTop: 8,
          height: 75,
          marginBottom: 8,
        },
        headerShadowVisible: false,
        headerTitle: "",
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name={"home"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name={"search"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name={"book"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name={"shopping-basket"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
