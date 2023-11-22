import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import colorPallete from "../config/colorPallete";

export default function PeopleScreen({ route, navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    let newData = route.params?.post
      ? [...data, route.params?.post]
      : [...data];
    setData(newData);
  }, [route.params?.post]);
  const getData = async () => {
    try {
      //let response = await fetch("https://fakestoreapi.com/products/"); // this one works
      let response = await fetch("https://swapi.dev/api/people/");
      let resData = await response.json();

      //getData will execute every time the route.params?.post change, hence if they exist we add them to the existing array(data)
      /*if (route.params?.post) {
        resData.results.push(route.params?.post);
      }*/
      /*let newData = route.params?.post
        ? [...resData.results, route.params?.post]
        : [...resData.results];*/
      setData(resData.results);
      console.log("Works");
      //console.log(resData.results);
    } catch (error) {
      console.log("UPPS " + error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("PeopleDetails", item)}
          >
            <Text style={styles.text}>{item.name}</Text>
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
    backgroundColor: colorPallete.peopleColor,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
});
