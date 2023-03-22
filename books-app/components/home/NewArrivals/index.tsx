import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

const books = [
  { id: 1, title: "Muscle", author: "Alan Trotter" },
  { id: 2, title: "Dominicana", author: "Angie Cruz" },
  { id: 3, title: "Livro 3", author: "Autor" },
  { id: 4, title: "Livro 4", author: "Autor" },
  { id: 5, title: "Livro 5", author: "Autor" },
];

export const NewArrivals = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>New arrivals</Text>
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllText}>View all</Text>
          <FontAwesome name={"angle-right"} size={18} color={"#FFBF00"} />
        </TouchableOpacity>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {books.map((book) => (
          <View style={styles.bookContainer} key={book.id}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.bookCape}
            ></TouchableOpacity>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthor}>{book.author}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
