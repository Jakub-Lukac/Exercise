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

function HomeScreen({ props }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "People" },
    { key: "second", title: "Films" },
    { key: "third", title: "Vehicles" },
  ]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Films"
        component={FilmsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Vehicles"
        component={VehiclesScreen}
        options={{ headerShown: false }}
      />
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
