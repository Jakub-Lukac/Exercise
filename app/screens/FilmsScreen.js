import React from "react";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export default function FilmsScreen({ navigation }) {
  const [filmData, setFilmData] = useState([]);
  useEffect(() => {
    getFilms();
  }, []);
  const getFilms = async () => {
    try {
      //let response = await fetch("https://fakestoreapi.com/products/"); // this one works
      let response = await fetch("https://swapi.dev/api/films/");
      let resData = await response.json();
      setFilmData(resData.results);
      console.log("Works");
      console.log(resData.results);
    } catch (error) {
      console.log("UPPS " + error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filmData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.push("FilmsDetails", item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
