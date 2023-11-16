import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PeopleScreen from "./PeopleScreen";
import FilmsScreen from "./FilmsScreen";
import VehiclesScreen from "./VehiclesScreen";
import AddItemScreen from "./AddItemScreen";

function HomeScreen({ props }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Vehicles" component={VehiclesScreen} />
      <Tab.Screen name="Add Item" component={AddItemScreen} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    borderRadius: 12,
    backgroundColor: "#360e15",
    marginTop: 20,
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: "white",
  },
});

export default HomeScreen;
