import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import React from 'react';

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Exploration(props) {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}> {props.title} </Text>
        <Text style={styles.note}> {props.note} </Text>
      </View>
      
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        {props.image.map(item => {
          return (
            <TouchableOpacity
              onPress={props.onPress}
            >
              <Image source={item.image} style={styles.exploreImage}/>
            </TouchableOpacity>
          )
          })
        }
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  exploreImage: {
    height: 140,
    width: 240,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
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
