import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import PeopleDetailsScreen from "./app/screens/PeopleDetailsScreen";
import FilmsDetailsScreen from "./app/screens/FilmsDetailScreen";
import VehiclesDetailsScreen from "./app/screens/VehiclesDetailsScreen";
import AddItemScreen from "./app/screens/AddItemScreen";

import colorPallete from "./app/config/colorPallete";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PeopleDetails"
            component={PeopleDetailsScreen}
            options={{
              title: "People Details",
              headerStyle: { backgroundColor: colorPallete.peopleColor },
              headerTitleStyle: { color: "white" },
            }}
          />
          <Stack.Screen
            name="FilmsDetails"
            component={FilmsDetailsScreen}
            options={{
              title: "Movie Details",
              headerStyle: { backgroundColor: colorPallete.filmsColor },
              headerTitleStyle: { color: "white" },
            }}
          />
          <Stack.Screen
            name="VehiclesDetails"
            component={VehiclesDetailsScreen}
            options={{
              title: "Vehicles Details",
              headerStyle: { backgroundColor: colorPallete.vehiclesColor },
              headerTitleStyle: { color: "white" },
            }}
          />
          <Stack.Screen
            name="AddItemScreen"
            component={AddItemScreen}
            options={{ title: "Add Item" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/*
<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
*/
