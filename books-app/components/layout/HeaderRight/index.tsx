import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5}>
        <FontAwesome
          style={{ marginRight: 20 }}
          name="qrcode"
          size={20}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.avatar}
        activeOpacity={0.7}
      ></TouchableOpacity>
    </View>
  );
};
