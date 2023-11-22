import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const AddItemComponent = (props) => {
  const {
    title,
    handlePress,
    firstPlaceHolder,
    firstInput,
    firstInputController,
    secondPlaceHolder,
    secondInput,
    secondInputController,
    buttonTitle,
    itemColor,
    itemColorWithOpacity,
  } = props;

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    title: {
      color: itemColor,
      marginBottom: 5,
      fontSize: 18,
      fontWeight: "bold",
    },
    input: {
      color: "white",
      borderColor: itemColor,
      backgroundColor: itemColorWithOpacity,
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      padding: 8,
      width: 300,
    },
    button: {
      marginTop: 5,
      marginBottom: 10,
      backgroundColor: itemColor,
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={firstPlaceHolder}
        placeholderTextColor={"white"}
        value={firstInput}
        onChangeText={firstInputController}
      />
      <TextInput
        style={styles.input}
        placeholder={secondPlaceHolder}
        placeholderTextColor={"white"}
        value={secondInput}
        onChangeText={secondInputController}
      />
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItemComponent;
