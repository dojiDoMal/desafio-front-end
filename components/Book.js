import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

import { Feather } from "@expo/vector-icons";

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Book(props) {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress={props.onPress}
        >
      <View>
          <Image source={props.book.image} style={styles.coverImage}/>
        <View style={styles.bookInfo}>
          <Text numberOfLines={1} style={styles.bookTitle}> {props.book.title} </Text>
          <Text numberOfLines={1} style={styles.bookAuthor}> de {props.book.author} </Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  bookTitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14, 
    width: 100
  },
  bookAuthor: {
    fontFamily: 'Poppins_400Regular',
    paddingTop: 3, 
    fontSize: 11,
    width: 100
  },
  bookInfo: {
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
  },
  coverImage: {
    height: 140,
    width: 90,
    borderRadius: 1,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 10
  },
})
