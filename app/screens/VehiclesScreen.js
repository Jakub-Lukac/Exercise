import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import colorPallete from "../config/colorPallete";

let x = [];

export default function VehiclesScreen({ route, navigation }) {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    getVehicles();
    if (route.params?.post) {
      console.log("Yes");
      x.push(route.params?.post);
      setPostData(x);
    } else {
      console.log("No");
    }
  }, [route.params?.post]);
  const getVehicles = async () => {
    try {
      //let response = await fetch("https://fakestoreapi.com/products/"); // this one works
      let response = await fetch("https://swapi.dev/api/vehicles/");
      let resData = await response.json();
      setVehiclesData(resData.results);
      console.log("Works");
      console.log(resData.results);
    } catch (error) {
      console.log("UPPS " + error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={vehiclesData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("VehiclesDetails", item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={postData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.push("VehiclesDetails", item)}
          >
            <Text>{item.name}</Text>
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
    color: colorPallete.vehiclesColor,
    fontWeight: "900",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#ad7d37",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
});
