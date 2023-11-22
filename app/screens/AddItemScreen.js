import { React, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
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
    <ScrollView style={styles.keyboard}>
      <View style={styles.container}>
        <AddItemComponent
          title="A D D  P E R S O N"
          firstPlaceHolder="Person name"
          firstInput={addPeopleName}
          firstInputController={setPeopleName}
          secondPlaceHolder="Person age"
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
          buttonTitle="A D D"
          itemColor="rgb(82, 141, 177)"
          itemColorWithOpacity="rgba(82, 141, 177, 0.3)"
        />
        <AddItemComponent
          title="A D D  M O V I E"
          firstPlaceHolder="Movie Name"
          firstInput={addFilmsTitle}
          firstInputController={setFilmsTitle}
          secondPlaceHolder="Episode number"
          secondInput={addFilmsEpisodeId}
          secondInputController={setFilmsEpisodeId}
          handlePress={() => {
            navigation.navigate({
              name: "Movies",
              params: {
                post: {
                  title: addFilmsTitle,
                  episode_id: addPeopleHeight,
                },
              },
              merge: true,
            });
          }}
          buttonTitle="A D D"
          itemColor="rgb(65, 125, 108)"
          itemColorWithOpacity="rgba(65, 125, 108, 0.3)"
        />
        <AddItemComponent
          title="A D D  V E H I C L E"
          firstPlaceHolder="Manufacturer"
          firstInput={addVehiclesName}
          firstInputController={setVehiclesName}
          secondPlaceHolder="Cost in credits"
          secondInput={addVehiclesCost}
          secondInputController={setVehiclesCost}
          handlePress={() => {
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
          buttonTitle="A D D"
          itemColor="rgb(173, 125, 55)"
          itemColorWithOpacity="rgba(173, 125, 55, 0.3)"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: "#1c2020",
  },
  container: {
    marginTop: 30,
    backgroundColor: "#1c2020",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
