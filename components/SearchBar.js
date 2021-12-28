import React, { useState, useEffect } from "react";
import { 
  StyleSheet, 
  TextInput, 
  View, 
  Keyboard, 
  Button 
} from "react-native";

import { Feather, Entypo } from "@expo/vector-icons";

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

const SearchBar = (props) => {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={16}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar livros"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onChange={props.change}
        />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    width: "100%",
  },
  icon: {
     marginLeft: 20,
     transform: [{scaleX: -1}],
     color: '#a0a0a0',
  },
  searchBar: {
    fontFamily: 'Poppins_400Regular',
    marginTop: 30,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    alignItems: "center",
  },
  input: {
    fontFamily: 'Poppins_400Regular',
    margin: 15,
    marginTop: 20,
    fontSize: 18,
    width: "80%",
  },
});
