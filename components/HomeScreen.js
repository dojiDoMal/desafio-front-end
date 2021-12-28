import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";

// Importacao dos componentes criados
import DetailScreen from './DetailScreen'
import Book from './Book'
import Review from './Review'
import Reading from'./Reading'
import Exploration from './Exploration'
import SearchBar from './SearchBar';

// Import do componente para uso de icones
import { Feather } from "@expo/vector-icons";

// Componente para criacao de elementos sombreados
import { BoxShadow } from "react-native-shadow";

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

const HomeScreen = ({navigation}) => {

  const [isShowingDetail, setIsShowingDetail] = useState(false);
  const [bookDetail, setBookDetail] = useState({});
  const [search, setSearch] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getBooks = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchPhrase)
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.items){
        setBooks(responseData.items);
        setErrorMessage(" ");
      } else {
        setErrorMessage("Não encontramos nada...");
      }
    })
    .catch(error => setErrorMessage(error))
    .done();
  }

  // TODO: esses livros precisam vir da API
  // (pegar dois fixos aleatórios)
  const discoverPictures = [
    {
      id: '1',
      image: require("../assets/business.jpg")
    },
    {
      id: '2',
      image: require("../assets/restaurant.jpg")
    }
  ]

  //TODO: esse livro precisam vir da API
  const currentReading = {
    title: 'Harry Potter e a\nPedra Filosofal',
    author: 'J.K. Rowling',
    image: require("../assets/harry.jpg")
  }
  
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  
  if(searchPhrase === ""){
    return(
      <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.jpg')} 
        style={styles.backgroundImage}
        imageStyle={{opacity:0.25}}
      >
        <SearchBar
          placeholder="Pesquisar Livro"
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />

        <View style={styles.greetingText}>
          <Text style={{fontSize: 22, fontFamily: 'Poppins_400Regular'}}>
            Olá,{" "}
            <Text style={{color: 'red'}}>Anderson Macedo 👋</Text>
          </Text>
        </View>

        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >

        <Exploration
          title="Descubra novos livros"
          note="Mais"
          image={discoverPictures}
          onPress={() => {
            navigation.navigate('Detail')
          }}
        />

        <Reading
          title="Lendo Agora"
          note="Todos"
          book={currentReading}
          onPress={() => {
            navigation.navigate('Detail')
          }}
        />

        <Review
          title="Críticas do dia"
          note="Vídeos"
          thumb={require('../assets/review.jpg')}
        />

        </ScrollView>
        
      </ImageBackground>
    </SafeAreaView>
    )
  } else { 
    return (
      <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.jpg')} 
        style={styles.backgroundImage}
        imageStyle={{opacity:0.25}}
      >
        <SearchBar
          placeholder="Pesquisar Livro"
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          change={getBooks}
        />

        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >    
          <Book
            book={books}
            onPress={() => {
              navigation.navigate('Detail') 
            }}
          >
          </Book>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
    )
  } 
}
export default HomeScreen

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
    marginTop: 25,
    flexDirection: "row",
    width: "100%",
    justifyContent: 'center', 
  }
});
