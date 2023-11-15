import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); //empty map?
  const [isFormValid, setIsFormValid] = useState(false); // if false we can not tap the button, if true we can tap the button

  /*useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [email, password]);*/
  // I understand what this method does, that it executes the validateForm for the "variables" email and password
  // Got this from internet
  const newPage = () => {
    navigation.push("Home");
  };
  const validateForm = () => {
    let errors = {};

    // validating email
    if (email === "") {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    //validating password
    if (password === "") {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    //setting the errors
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
    // I understand that if the lenght of errors is 0 then true value is passed
    // I assume that Object.keys(errors) checks how many key values are inside the errors (MAP)

    if (isFormValid) {
      // navigation to new screen
      console.log("Is valid");
      newPage();
    } else {
      console.log("is not valid");
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logo.png")}
        />

        <Text>{errors["email"]}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        ></TextInput>

        <Text>{errors["password"]}</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry // set to true
        ></TextInput>

        <TouchableOpacity // if it is disabled we can not click on it
          style={styles.loginButton}
          onPress={validateForm}
        >
          <Text style={styles.text}>L O G I N</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    top: "2%",
  },
  logo: {
    width: 300, // dont know whether I should use percentage instead of value like 300, when I want to have same results on all screen sizes
    height: 300,
  },
  input: {
    height: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#fffdef",
    backgroundColor: "#fffdd0",
    padding: 10,
    margin: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  loginButton: {
    borderRadius: 12,
    backgroundColor: "#360e15",
    marginTop: 20,
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
  },
});

export default LoginScreen;
