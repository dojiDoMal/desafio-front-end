import { 
  Text, 
  SafeAreaView, 
  View, 
  Image, 
  ImageBackground, 
  Button, 
  StyleSheet, 
  StatusBar, 
  ScrollView 
} from 'react-native';
import * as React from 'react';

// Import do componente para uso de icones
import { Feather } from "@expo/vector-icons";

// Componente para criacao de elementos sombreados
import { BoxShadow } from "react-native-shadow";

// Import da fonte do google
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

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
      <StatusBar
        animated={true}
        backgroundColor="blanchedalmond"
      />
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Feather
          name="arrow-left"
          size={26}
          color='black'
          style={styles.backButton}
          onPress={()=>{
            navigation.navigate('Home')
          }}
        />
        <View style={{ height: 160, borderBottomRightRadius: 100, backgroundColor: 'blanchedalmond', flex:1, alignItems: 'center'}}>
          <Image 
            source={require('../assets/circles.png')} 
            style={{position: 'absolute', top: -550, left: 60, right: 0, bottom: 0}}
          />
          <Image source={book.cover} style={{height: 190}}/>
        </View>

        <View style={styles.textBody}>
          <Text style={styles.titleText}>{book.title}</Text>
          <Text style={styles.authorText}>{book.title}</Text>
          <Text style={styles.descriptionText}>{book.description}</Text>
        </View>
    
      </ScrollView>

      <BoxShadow setting={styles.shadow}>
        <View style={styles.floatButton}>
          <Feather
            name="book"
            size={22}
            color='grey'
            style={styles.iconStyle}
          />
          <Text style={styles.floatButtonText}>Ler
            <Text style={{color: '#afafaf', fontSize: 20}}>{"  |  "}</Text>
          </Text>

          <Feather
            name="headphones"
            size={22}
            color='grey'
            style={styles.iconStyle}
          />
          <Text style={styles.floatButtonText}>Ouvir
            <Text style={{color: '#afafaf', fontSize: 20}}>{"  |  "}</Text>
          </Text>

          <Feather
            name="share"
            size={22}
            color='grey'
            style={styles.iconStyle}
          />
          <Text style={styles.floatButtonText}>Enviar</Text>
        </View>
      </BoxShadow>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    backButton: {
      backgroundColor: "blanchedalmond",
      paddingTop: 30,
      paddingBottom: 20,
      paddingHorizontal: 30
    },
    shadow: {
      width: 360,
      height: 70,
      color: "#f0f0f0",
      border: 80,
    },
    textBody: {
      flex: 2,
      paddingHorizontal: 25,
    },
    titleText: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 30, 
      textAlign: 'left', 
      paddingTop: 60, 
      paddingBottom: 10
    },
    floatButton: {
      elevation: 5, 
      borderRadius: 5, 
      justifyContent: 'center',
      width: 310, 
      right: 25, 
      flexDirection: 'row',
      bottom: 40,
      position: 'absolute',
      height: 60,
      backgroundColor: 'rgb(230,230,230)',
      textAlign: 'center',
      lineHeight: 60
    },
    floatButtonText: {
      fontFamily: 'Poppins_400Regular',
      paddingLeft:10, 
      textAlign: 'center', 
      lineHeight: 60, 
      fontSize: 16
    },
    iconStyle: {
      textAlign: 'center', 
      lineHeight: 60
    },
    authorText: {
      fontFamily: 'Poppins_400Regular', 
      color: '#cc3366', 
      fontSize: 18, 
      paddingBottom: 10
    },
    descriptionText: {
      fontFamily: 'Poppins_400Regular', 
      textAlign: 'justify', 
      color: '#666666', 
      fontSize: 16, 
      lineHeight: 25,
      paddingBottom: 80
    }
  }
)
