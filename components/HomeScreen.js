import React, { useState } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    ImageBackground
} from "react-native";

import Exploration from './Exploration'
import SearchBar from './SearchBar';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function HomeScreen() {

  const [search, setSearch] = useState("");

  const pictures = [
    {
      id: '1',
      image: require("../assets/business.jpg")
    },
    {
      id: '2',
      image: require("../assets/restaurant.jpg")
    }
  ]

  const updateSearch = (search) => {
    setSearch(search);
  };

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.jpg')} 
        style={styles.backgroundImage}
        imageStyle={{opacity:0.25}}
      >
        <SearchBar
          placeholder="Pesquisar Livro"
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={styles.greetingText}>
          <Text style={{fontSize: 22, fontFamily: 'Poppins_400Regular'}}>
            Olá,{" "}
            <Text style={{color: 'red'}}>Anderson Macedo 👋</Text>
          </Text>
        </View>
        <Exploration
          title="Descubra novos livros"
          note="Mais"
          image={pictures}
        />
      </ImageBackground>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
    width: null,
    height: null,
  },
  greetingText: {
    paddingHorizontal: 20,
    marginTop: 35,
    flexDirection: "row",
    width: "100%",
    justifyContent: 'center', 
  }
});
