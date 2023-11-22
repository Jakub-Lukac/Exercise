import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import colorPallete from "../config/colorPallete.js";

export default function FilmsScreen({ route, navigation }) {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);
  useEffect(() => {
    let newData = route.params?.post
      ? [...filmData, route.params?.post]
      : [...filmData];
    setFilmData(newData);
  }, [route.params?.post]);
  const getFilms = async () => {
    try {
      //let response = await fetch("https://fakestoreapi.com/products/"); // this one works
      let response = await fetch("https://swapi.dev/api/films/");
      let resData = await response.json();
      setFilmData(resData.results);
      console.log("Works");
    } catch (error) {
      console.log("UPPS " + error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filmData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("FilmsDetails", item)}
          >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colorPallete.backgroundColor,
  },
  text: {
    color: colorPallete.textColor,
    fontWeight: "900",
  },
  button: {
    marginTop: 10,
    backgroundColor: colorPallete.filmsColor,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
});
