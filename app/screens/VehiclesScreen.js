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

export default function VehiclesScreen({ route, navigation }) {
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    getVehicles();
  }, []);
  useEffect(() => {
    let newData = route.params?.post
      ? [...vehiclesData, route.params?.post]
      : [...vehiclesData];
    setVehiclesData(newData);
  }, [route.params?.post]);
  const getVehicles = async () => {
    try {
      //let response = await fetch("https://fakestoreapi.com/products/"); // this one works
      let response = await fetch("https://swapi.dev/api/vehicles/");
      let resData = await response.json();
      setVehiclesData(resData.results);
      console.log("Works");
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
    backgroundColor: "#ad7d37",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
});
