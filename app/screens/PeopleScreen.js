import React from "react";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export default function PeopleScreen({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      //let response = await fetch("https://fakestoreapi.com/products/"); // this one works
      let response = await fetch("https://swapi.dev/api/people/");
      let resData = await response.json();
      setData(resData.results);
      console.log("Works");
      console.log(resData.results);
    } catch (error) {
      console.log("UPPS " + error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.push("PeopleDetails", item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
