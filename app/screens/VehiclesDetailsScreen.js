import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function VehiclesDetailsScreen({ route, navigation }) {
  const { manufacturer, cost_in_credits } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(manufacturer)}</Text>
      <Text>{JSON.stringify(cost_in_credits)}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}
