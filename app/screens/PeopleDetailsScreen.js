import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function PeopleDetailsScreen({ route, navigation }) {
  const { name, height } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(name)}</Text>
      <Text>{JSON.stringify(height)}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}
