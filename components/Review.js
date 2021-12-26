import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Review(props) {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}> {props.title} </Text>
        <Text style={styles.note}> {props.note} </Text>
      </View>
      <Image source={props.thumb} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20
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
