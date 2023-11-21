import { React, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import AddItemComponent from "../config/AddItemComponent";

export default function AddItemScreen({ route, navigation }) {
  const [addPeopleName, setPeopleName] = useState("");
  const [addPeopleHeight, setPeopleHeight] = useState("");
  const [addFilmsTitle, setFilmsTitle] = useState("");
  const [addFilmsEpisodeId, setFilmsEpisodeId] = useState("");
  const [addVehiclesName, setVehiclesName] = useState("");
  const [addVehiclesCost, setVehiclesCost] = useState("");

  return (
    <View style={styles.container}>
      <AddItemComponent
        title="P R I D A N I E  O S O B Y"
        firstPlaceHolder="Meno osoby"
        firstInput={addPeopleName}
        firstInputController={setPeopleName}
        secondPlaceHolder="Vek osoby"
        secondInput={addPeopleHeight}
        secondInputController={setPeopleHeight}
        handlePress={() => {
          navigation.navigate({
            name: "People",
            params: {
              post: {
                name: addPeopleName,
                height: addPeopleHeight,
              },
            },
            merge: true,
          });
        }}
        buttonTitle="P R I D A T"
        itemColor="rgb(82, 141, 177)"
        itemColorWithOpacity="rgba(82, 141, 177, 0.3)"
      />
      <AddItemComponent
        title="P R I D A N I E  F I L M U"
        firstPlaceHolder="Nazov Filmu"
        firstInput={addFilmsTitle}
        firstInputController={setFilmsTitle}
        secondPlaceHolder="Vek osoby"
        secondInput={addFilmsEpisodeId}
        secondInputController={setFilmsEpisodeId}
        handlePress={() => {
          navigation.navigate({
            name: "Films",
            params: {
              post: {
                title: addFilmsTitle,
                episode_id: addPeopleHeight,
              },
            },
            merge: true,
          });
        }}
        buttonTitle="P R I D A T"
        itemColor="rgb(65, 125, 108)"
        itemColorWithOpacity="rgba(65, 125, 108, 0.3)"
      />
      <AddItemComponent
        title="P R I D A N I E  V O Z I D L A"
        firstPlaceHolder="Nazov vozidla"
        firstInput={addVehiclesName}
        firstInputController={setVehiclesName}
        secondPlaceHolder="Cena vozidla"
        secondInput={addVehiclesCost}
        secondInputController={setVehiclesCost}
        handlePress={() => {
          navigation.navigate({
            name: "Films",
            params: {
              post: {
                manufacturer: addVehiclesName,
                cost_in_credits: addPeopleHeight,
              },
            },
            merge: true,
          });
        }}
        buttonTitle="P R I D A T"
        itemColor="rgb(173, 125, 55)"
        itemColorWithOpacity="rgba(173, 125, 55, 0.3)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c2020",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
