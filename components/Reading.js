import { Text, View, StyleSheet, Image, ScrollView,ImageBackground } from 'react-native';
import React from 'react';

import { Feather } from "@expo/vector-icons";

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Reading(props) {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.jpg')}
        imageStyle={styles.backgroundImage}
        style={{}}
      >
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}> {props.title} </Text>
        <Text style={styles.note}> {props.note} </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image source={props.book.image} style={styles.exploreImage}/>
        <View style={styles.bookInfo}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> {props.book.title} </Text>
          <Text style={{paddingTop: 5, color: 'grey'}}> de {props.book.author} </Text>
          <Text style={{paddingTop: 20}}>
            <Feather
              name="bookmark"
              size={18}
              color='purple'
            />
           {" "}Capítulo <Text style={{color: 'red'}}>2</Text> de 10 
          </Text>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  backgroundImage:{
    borderRadius: 5, 
    opacity: 0.3, 
    marginLeft: -40, 
    marginTop: 50, 
    marginBottom: 10, 
    marginRight: 30, 
    tintColor: 'rgba(10, 220, 30, 0.9)'
  },
  bookInfo: {
    paddingTop: 20,
  },
  exploreImage: {
    height: 140,
    width: 90,
    borderRadius: 1,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 10
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 19,
    flex: 2
  },
  note: {
    color: '#00BFFF',
    fontFamily: 'Poppins_400Regular',
    fontSize: 17
  }
})
