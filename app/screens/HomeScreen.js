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

import colorPallete from "../config/colorPallete";

function HomeScreen({ props }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: colorPallete.tabBarBackgroundColor,
        },
        tabBarActiveTintColor: colorPallete.textColor,
        tabBarInactiveTintColor: colorPallete.textInactiveColor,
        tabBarIcon: ({ focused }) => {
          if (route.name === "People") {
            if (focused) {
              return (
                <View>
                  <Image
                    source={require("../assets/user.png")}
                    resizeMode="contain"
                    style={{ width: 25 }}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Image
                    source={require("../assets/user-outlined.png")}
                    resizeMode="contain"
                    style={{ width: 25 }}
                  />
                </View>
              );
            }
          } else if (route.name === "Movies") {
            if (focused) {
              return (
                <View>
                  <Image
                    source={require("../assets/pop-corn.png")}
                    resizeMode="contain"
                    style={{ width: 25 }}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Image
                    source={require("../assets/pop-corn-outlined.png")}
                    resizeMode="contain"
                    style={{ width: 25 }}
                  />
                </View>
              );
            }
          } else if (route.name === "Vehicles") {
            if (focused) {
              return (
                <View>
                  <Image
                    source={require("../assets/spacecraft.png")}
                    resizeMode="contain"
                    style={{ width: 25 }}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Image
                    source={require("../assets/spacecraft-outlined.png")}
                    resizeMode="contain"
                    style={{ width: 25 }}
                  />
                </View>
              );
            }
          } else {
            if (focused) {
              return (
                <View>
                  <Image
                    source={require("../assets/add.png")}
                    resizeMode="contain"
                    style={{ width: 25 }}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Image
                    source={require("../assets/add-outlined.png")}
                    resizeMode="contain"
                    style={{ width: 25 }}
                  />
                </View>
              );
            }
          }

          // You can return any component that you like here!
          //return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{
          headerStyle: { backgroundColor: colorPallete.peopleColor },
          headerTitleStyle: { color: "white" },
        }}
      />
      <Tab.Screen
        name="Movies"
        component={FilmsScreen}
        options={{
          headerStyle: { backgroundColor: colorPallete.filmsColor },
          headerTitleStyle: { color: "white" },
        }}
      />
      <Tab.Screen
        name="Vehicles"
        component={VehiclesScreen}
        options={{
          headerStyle: { backgroundColor: colorPallete.vehiclesColor },
          headerTitleStyle: { color: "white" },
        }}
      />
      <Tab.Screen
        name="Add Item"
        component={AddItemScreen}
        options={{
          headerStyle: {
            backgroundColor: colorPallete.backgroundColor,
            elevation: 0,
          },
          headerTitleStyle: { color: "white" },
        }}
      />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default HomeScreen;
