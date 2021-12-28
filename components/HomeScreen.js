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

  // Livros da secao descubra novos livros
  const discoverPictures = [
    {
      id: '1',
      image: require("../assets/business.jpg"),
      book: {
        title: "Design Thinking: Inovação em Negócios",
        author: "Mauricio Vianna",
        description: "O 'Design Thinking' pretende abordar problemas tradicionais de negócio sob múltiplas perspectivas, buscando ajudar a solucioná-los de maneira mais efetiva, conduzindo a novos caminhos. O objetivo desta leitura é propagar no Brasil a cultura do design como uma ferramenta estratégica para as empresas, bem como a percepção de que a possibilidade de retorno financeiro está, muitas vezes, atrelada à capacidade de abordar as mesmas questões por novos ângulos. Este livro se propõe a apresentar etapas, técnicas e ferramentas ilustradas através de cases genuinamente brasileiros.",
        image: "http://books.google.com/books/content?id=FKC3rEd9xicC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    },
    {
      id: '2',
      image: require("../assets/restaurant.jpg"),
      book: {
        title: "Comida cheia de história",
        author: "Patrícia Ferraz",
        description: "Um bom prato fica ainda melhor quando acompanhado de uma boa conversa... e é nesse clima de papo descontraído à mesa que Patrícia Ferraz introduz suas receitas favoritas em Comida cheia de história. As crônicas presentes no livro contam algumas das experiências vividas pela autora em seus vinte anos de jornalismo gastronômico, e envolvem entrevistas com chefs e celebridades, viagens e visitas a restaurantes variados, descobertas ao acaso e segredos aprendidos em casa e em cozinhas famosas. Os textos abrem o apetite para inúmeros pratos que têm em comum o fato de serem incrivelmente saborosos e fáceis de fazer em casa, mesmo por quem não tem experiência ou não conta com uma cozinha grande e equipada. Este lançamento do Senac São Paulo se destina a todos os amantes da gastronomia – simples, prazerosa e feita com capricho – e das boas histórias, que merecem ser compartilhadas.",
        image: "http://books.google.com/books/content?id=GDzKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    }
  ]

  // Livro atual lido pelo usuario
  const currentReading = {
    book: {
      title: 'Mindset',
    author: 'Carol Dweck',
    image: "http://books.google.com/books/content?id=aizjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description: "Clássico da psicologia em versão revista e atualizada. Carol S. Dweck, professora de psicologia na Universidade Stanford e especialista internacional em sucesso e motivação, desenvolveu, ao longo de décadas de pesquisa, um conceito fundamental: a atitude mental com que encaramos a vida, que ela chama de \"mindset\", é crucial para o sucesso. Dweck revela de forma brilhante como o sucesso pode ser alcançado pela maneira como lidamos com nossos objetivos. O mindset não é um mero traço de personalidade, é a explicação de por que somos otimistas ou pessimistas, bem-sucedidos ou não. Ele define nossa relação com o trabalho e com as pessoas e a maneira como educamos nossos filhos. É um fator decisivo para que todo o nosso potencial seja explorado."
    }
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
          navigation={navigation.navigate}
        />

        <Reading
          title="Lendo Agora"
          note="Todos"
          book={currentReading}
          navigation={navigation.navigate}
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
            navigation={navigation.navigate}
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
