import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { NewArrivals } from "../../components/home";

export default function Home() {
  return (
    <>
      <ScrollView
        style={
          {
            // backgroundColor: "#e9e9e9",
          }
        }
      >
        <NewArrivals />
      </ScrollView>
      <View
        style={{
          elevation: 50,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          width: Dimensions.get("screen").width,
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "white",
          padding: 20,
          paddingTop: 50,
        }}
      >
        <View
          style={{
            backgroundColor: "#ddd",
            position: "absolute",
            top: 10,
            borderRadius: 10,
            height: 5,
            width: 40,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            backgroundColor: "gray",
            height: 220,
            width: 130,
            borderRadius: 10,
            elevation: 20,
          }}
        />
      </View>
    </>
  );
}
