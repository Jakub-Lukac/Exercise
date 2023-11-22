import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import colorPallete from "../config/colorPallete";

export default function FilmsDetailsScreen({ route, navigation }) {
  const { title, episode_id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(title)}</Text>
      <Text style={styles.text}>{JSON.stringify(episode_id)}</Text>
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
    color: colorPallete.filmsColor,
    fontWeight: "900",
    fontSize: 35,
    margin: 10,
  },
});
