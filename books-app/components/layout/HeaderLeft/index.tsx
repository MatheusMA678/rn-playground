import { View, Text } from "react-native";
import React from "react";

import styles from "./styles";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const date = new Date();
const day = date.getDate();
const weekDay = daysOfWeek[date.getDay()];
const month = monthNames[date.getMonth()];
const year = date.getFullYear();

export const HeaderLeft = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dayStyle}>{day}</Text>
      <View>
        <Text style={styles.dayRight}>{weekDay}</Text>
        <Text style={styles.dayRight}>
          {month} {year}
        </Text>
      </View>
    </View>
  );
};
