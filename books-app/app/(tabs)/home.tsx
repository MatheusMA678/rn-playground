import { View, Text, ScrollView } from "react-native";
import React from "react";
import { NewArrivals } from "../../components/home";

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <NewArrivals />
    </ScrollView>
  );
}
