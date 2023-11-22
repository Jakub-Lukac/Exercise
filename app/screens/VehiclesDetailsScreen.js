import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colorPallete from "../config/colorPallete";
export default function VehiclesDetailsScreen({ route, navigation }) {
  const { manufacturer, cost_in_credits } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(manufacturer)}</Text>
      <Text style={styles.text}>{JSON.stringify(cost_in_credits)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPallete.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: colorPallete.vehiclesColor,
    fontWeight: "900",
    fontSize: 35,
    margin: 10,
  },
});
