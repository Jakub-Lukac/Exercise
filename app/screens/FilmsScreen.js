import React from "react";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

let x = [];

export default function FilmsScreen({ route, navigation }) {
  const [filmData, setFilmData] = useState([]);
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    getFilms();
    if (route.params?.post) {
      console.log("Yes");
      x.push(route.params?.post);
      setPostData(x);
    } else {
      console.log("No");
    }
  }, [route.params?.post]);
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
      <FlatList
        data={postData}
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
