import React from "react";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export default function VehiclesScreen({ navigation }) {
  const [vehiclesData, setVehiclesData] = useState([]);
  useEffect(() => {
    getVehicles();
  }, []);
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
    <View style={{ flex: 1 }}>
      <FlatList
        data={vehiclesData}
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
