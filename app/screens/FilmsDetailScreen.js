import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function FilmsDetailsScreen({ route, navigation }) {
  const { title, episode_id } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(title)}</Text>
      <Text>{JSON.stringify(episode_id)}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}
