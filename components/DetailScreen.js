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

export default function DetailScreen({navigation, route}) {

  const {data, image} = route.params;
  
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if(image){
    return(
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
          <View style={{ height: 180, borderBottomRightRadius: 100, backgroundColor: 'blanchedalmond', flex:1, alignItems: 'center'}}>
            <Image 
              source={require('../assets/circles.png')} 
              style={{position: 'absolute', top: -550, left: 60, right: 0, bottom: 0}}
            />
            <Image source={{uri: `${image.book.image}` }} 
            style={{position: 'absolute', top: 20, left: 0, right: 0, bottom: -110, height: 200, width:'100%', resizeMode: 'contain'}}
            />         
          </View>
          
          <View style={styles.textBody}>
            <Text style={styles.titleText}>{image.book.title}</Text>
            <Text style={styles.authorText}>{image.book.author}</Text>
            <Text style={styles.descriptionText}>{image.book.description}</Text>
            
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
    )
  } else if(data){
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
          <View style={{ height: 180, borderBottomRightRadius: 100, backgroundColor: 'blanchedalmond', flex:1, alignItems: 'center'}}>
            <Image 
              source={require('../assets/circles.png')} 
              style={{position: 'absolute', top: -550, left: 60, right: 0, bottom: 0}}
            />
            <Image source={{uri: `${data.props.children[0].props.source.uri}` }} 
            style={{position: 'absolute', top: 20, left: 0, right: 0, bottom: -110, height: 200, width:'100%', resizeMode: 'contain'}}
            />         
          </View>
          
          <View style={styles.textBody}>
            <Text style={styles.titleText}>{data.props.children[1].props.children[0].props.children[1]}</Text>
            {data.props.children[1].props.children[1].props.children[1] ? (
              <Text style={styles.authorText}>{data.props.children[1].props.children[1].props.children[1][0]}</Text>
            ) : (
              <Text style={styles.authorText}>Autor desconhecido</Text>
            )}
            {data.props.children[1].props.children[2] ? (
              <Text style={styles.descriptionText}>{data.props.children[1].props.children[2].props.children[1]}</Text>
            ) : (
              <Text>{" "}</Text>
            )}
            
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
