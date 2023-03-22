import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingBottom: 8,
  },
  title: {
    fontFamily: "SlabBold",
    fontSize: 24,
  },
  viewAllBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    color: "#FFBF00",
    fontFamily: "RobotoRegular",
    fontSize: 18,
    marginRight: 10,
  },
  bookContainer: {
    padding: 16,
  },
  bookCape: {
    backgroundColor: "gray",
    borderRadius: 10,
    height: 240,
    width: 150,
    marginBottom: 16,
    elevation: 10,
    shadowColor: "black",
  },
  bookTitle: {
    fontFamily: "SlabBold",
    fontSize: 20,
    marginBottom: 2,
  },
  bookAuthor: {
    fontSize: 18,
    color: "gray",
    fontFamily: "RobotoRegular",
  },
});

export default styles;
