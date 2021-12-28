import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  Button,
  ScrollView,  
  FlatList,     
  ImageBackground, 
  TouchableOpacity 
} from 'react-native';
import React, { useState } from 'react';

// Import do componente para uso de icones
import { Feather } from "@expo/vector-icons";

// Import da fonte do google
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Book(props) {

  const [itemsCount, setItemsCount] = useState(3);

  const showMore = function(){
    console.log(itemsCount)
    setItemsCount(props.book.length);
    console.log(itemsCount)
  }

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  let result = [];

  if(props.book.length > 0){
    if(itemsCount === 3){
      for(let i=0; i<3; i++){
        if(props.book[i].volumeInfo.imageLinks){
          result.push(
            <View style={{paddingHorizontal: 2}}>
                <Image source={{uri: `${props.book[i].volumeInfo.imageLinks.thumbnail}` }} style={styles.coverImage}/>
              <View style={styles.bookInfo}>
                <Text numberOfLines={2} style={styles.bookTitle}> {props.book[i].volumeInfo.title} </Text>
                <Text numberOfLines={1} style={styles.bookAuthor}> de {props.book[i].volumeInfo.authors} </Text>
                <Text style={{opacity: 0, width: 0, height: 0}}> {props.book[i].volumeInfo.description} </Text>
              </View>
            </View>
          )
        }
      }
    } else {
      for(let i=0; i<props.book.length; i++){
        if(props.book[i].volumeInfo.imageLinks){
          result.push(
            <View style={{paddingHorizontal: 2}}>
                <Image source={{uri: `${props.book[i].volumeInfo.imageLinks.thumbnail}` }} style={styles.coverImage}/>
              <View style={styles.bookInfo}>
                <Text numberOfLines={2} style={styles.bookTitle}> {props.book[i].volumeInfo.title} </Text>
                <Text numberOfLines={1} style={styles.bookAuthor}> de {props.book[i].volumeInfo.authors} </Text>
                <Text style={{opacity: 0, width: 0, height: 0}}> {props.book[i].volumeInfo.description} </Text>
              </View>
            </View>
          )
        } 
      }
    }
  }

  return (
    <View>
      <FlatList
        data={result}
        numColumns={3}
        keyExtractor={({ id }, index) => id}
        style={styles.list}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation('Detail', {data: item})
            }}
          >
            {item}
          </TouchableOpacity>
        )}  
      />      
      <View style={styles.button}>
      {itemsCount === 3 ? (
        <Button 
          color='rgb(30,100,200)'
          title='Mostrar Mais' 
          onPress={showMore}
        />
      ) : (
        <Text style={{textAlign: 'center', color: 'grey', paddingVertical: 20}}>{result.length} Resultado(s)</Text>
      )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    borderRadius: 50,
    paddingTop: 20,
    paddingHorizontal: 80,
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