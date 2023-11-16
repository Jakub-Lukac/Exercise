import React from "react";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

let x = [];

export default function PeopleScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getData();
    if (route.params?.post) {
      console.log("Yes");
      x.push(route.params?.post);
      setPostData(x);
    } else {
      console.log("No");
    }
  }, [route.params?.post]);
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
          <TouchableOpacity
            onPress={() => navigation.push("PeopleDetails", item)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={postData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.push("PeopleDetails", item)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
