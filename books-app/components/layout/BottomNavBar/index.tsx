import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export const BottomNavBar = () => {
  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
