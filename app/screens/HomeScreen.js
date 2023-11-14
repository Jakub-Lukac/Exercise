import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function HomeScreen(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    /*const URL = "https://swapi.dev/api/people/";

    fetch(URL)
      .then((res) => {
        return res.json;
      })
      .then((resData) => {
        setData(resData);
        console.log(resData);
      });*/
    try {
      //let response = await fetch("https://fakestoreapi.com/products/"); // this one works
      let response = await fetch("https://swapi.dev/api/films/");
      let resData = await response.json();
      setData(resData.results);
      console.log("Works");
      console.log(resData.results);
      //console.log(resData.result[0].name); //getting only Luke Skywalker
    } catch (error) {
      console.log("UPPS " + error);
      /*
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
          </View>
        )}
      /> 
      */
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={getData}>
        <Text style={styles.text}>Hello</Text>
      </TouchableOpacity>
      {data.map((item, key) => {
        return <Text key={key}>{item.title}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    borderRadius: 12,
    backgroundColor: "#360e15",
    marginTop: 20,
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: "white",
  },
});

export default HomeScreen;
