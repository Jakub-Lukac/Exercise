import { React, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

export default function AddItemScreen({ route, navigation }) {
  const [addPeopleName, setPeopleName] = useState("");
  const [addPeopleHeight, setPeopleHeigjt] = useState("");
  const [addFilmsTitle, setFilmsTitle] = useState("");
  const [addFilmsEpisodeId, setFilmsEpisodeId] = useState("");
  const [addVehiclesName, setVehiclesName] = useState("");
  const [addVehiclesCost, setVehiclesCost] = useState("");
  return (
    <View style={styles.container}>
      <Text>P R I D A N I E O S O B Y</Text>
      <TextInput
        ref={this.myTextInput}
        placeholder="Meno osoby"
        value={addPeopleName}
        onChangeText={setPeopleName}
      ></TextInput>
      <TextInput
        placeholder="Vyska osoby"
        value={addPeopleHeight}
        onChangeText={setPeopleHeigjt}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: "People",
            params: { post: { name: addPeopleName, height: addPeopleHeight } },
            merge: true,
          });
        }}
      >
        <Text>P R I D A Ť</Text>
      </TouchableOpacity>

      <Text>P R I D A N I E F I L M U</Text>
      <TextInput
        ref={this.myTextInput}
        placeholder="Nazov Filmu"
        value={addFilmsTitle}
        onChangeText={setFilmsTitle}
      ></TextInput>
      <TextInput
        placeholder="Cislo epizody"
        value={addFilmsEpisodeId}
        onChangeText={setFilmsEpisodeId}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: "Films",
            params: {
              post: { title: addFilmsTitle, episode_id: addFilmsEpisodeId },
            },
            merge: true,
          });
        }}
      >
        <Text>P R I D A Ť</Text>
      </TouchableOpacity>

      <Text>P R I D A N I E V O Z I D L A</Text>
      <TextInput
        ref={this.myTextInput}
        placeholder="Nazov vozidla"
        value={addVehiclesName}
        onChangeText={setVehiclesName}
      ></TextInput>
      <TextInput
        placeholder="Cena vozidla"
        value={addVehiclesCost}
        onChangeText={setVehiclesCost}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: "Vehicles",
            params: {
              post: {
                manufacturer: addVehiclesName,
                cost_in_credits: addVehiclesCost,
              },
            },
            merge: true,
          });
        }}
      >
        <Text>P R I D A Ť</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
