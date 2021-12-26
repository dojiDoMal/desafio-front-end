import { Text, SafeAreaView, View, Image, Button, StyleSheet, ScrollView } from 'react-native';
import * as React from 'react';

import { Feather } from "@expo/vector-icons";

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

//TODO: fazer algumas melhorias no CSS
export default function DetailScreen({navigation}) {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  // TODO: esse livro deve vir do objeto clicado na home screen
  // (atraves dos dados da API)
  const book = {
    title: 'Harry Potter e a\nPedra Filosofal',
    author: 'J.K. Rowling',
    description: 'Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra \"H\". Harry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, no 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!',
    cover: require("../assets/harry.jpg")
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
        <Feather
          name="arrow-left"
          size={26}
          color='black'
          style={styles.backButton}
          onPress={()=>{
            navigation.navigate('Home')
          }}
        />
        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
        <View style={{flex:1, alignItems: 'center'}}>
          <Image source={book.cover} />
        </View>
        <View style={styles.textBody}>
          <Text style={styles.titleText}>{book.title}</Text>
          <Text style={styles.authorText}>{book.author}</Text>
          <Text style={styles.descriptionText}>{book.description}</Text>
        </View>
        </ScrollView>

        <View style={[styles.floatButton, {borderRadius: 5, justifyContent: 'center',width: 90, right:238, flexDirection: 'row'}]}>
        <Feather
          name="book"
          size={26}
          color='black'
          style={{textAlign: 'center', lineHeight: 60}}
        />
        <Text style={{paddingLeft:10, textAlign: 'center', lineHeight: 60, fontSize: 18}}>Ler</Text>
        </View>

        <View style={[styles.floatButton, {justifyContent: 'center',width: 110, right:138, flexDirection: 'row'}]}>
        <Feather
          name="headphones"
          size={26}
          color='black'
          style={{textAlign: 'center', lineHeight: 60}}
        />
        <Text style={{paddingLeft:10, textAlign: 'center', lineHeight: 60, fontSize: 18}}>Ouvir</Text>
        </View>

        <View style={[styles.floatButton, {borderRadius: 5, justifyContent: 'center',width: 110, right:38, flexDirection: 'row'}]}>
        <Feather
          name="share"
          size={26}
          color='black'
          style={{textAlign: 'center', lineHeight: 60}}
        />
        <Text style={{paddingLeft:10, textAlign: 'center', lineHeight: 60, fontSize: 18}}>Enviar</Text>
        </View>

     </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    backButton:{
      paddingTop: 30,
      paddingHorizontal: 30
    },
    textBody: {
      flex: 2,
      paddingHorizontal: 25,
    },
    titleText:{
      fontFamily: 'Poppins_400Regular',
      fontSize: 30, 
      textAlign: 'left', 
      paddingTop:30, 
      paddingBottom: 10
    },
    floatButton:{
      bottom: 40,
      position: 'absolute',
      height: 60,
      backgroundColor: '#cecece',
      textAlign: 'center',
      lineHeight: 60
    },
    authorText:{
      fontFamily: 'Poppins_400Regular', 
      color: '#cc3366', 
      fontSize: 18, 
      paddingBottom: 10
    },
    descriptionText:{
      fontFamily: 'Poppins_400Regular', 
      textAlign: 'justify', 
      color: '#666666', 
      fontSize: 16, 
      lineHeight: 25,
      paddingBottom: 130
    }
  }
)
