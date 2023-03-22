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

export const unstable_settings = {
  initialRouteName: "home",
};

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
        },
        tabBarLabelStyle: {
          marginBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name={"home"} color={color} />
          ),

          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name={"search"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name={"book"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name={"shopping-basket"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
