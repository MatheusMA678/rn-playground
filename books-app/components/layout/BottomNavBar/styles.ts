import { StyleSheet, Dimensions, StyleSheetProperties } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: "#212121",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: screenWidth,
    paddingHorizontal: 32,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    marginTop: 5,
    color: "white",
  },
});

export default styles;
