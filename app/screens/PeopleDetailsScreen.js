import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colorPallete from "../config/colorPallete";

export default function PeopleDetailsScreen({ route, navigation }) {
  const { name, height } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(name)}</Text>
      <Text style={styles.text}>{JSON.stringify(height)}</Text>
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
    color: colorPallete.peopleColor,
    fontWeight: "900",
    fontSize: 35,
    margin: 10,
  },
});
