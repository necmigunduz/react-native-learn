import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Characters from './components/Characters';
import Dice from './assets/dice.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://images7.alphacoders.com/751/751400.png'}}
        alt="rickandmorty"
        style={styles.image}
      />
      <Text style={styles.header}>Rick and Morty Characters</Text>
      <Characters />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'lightblue',
    marginTop: 20,
    borderRadius: 20,
    padding: 40,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 15,
    borderStyle: 'dotted',
  },
  image: {
    marginTop: 20,
    borderWidth: 5,
    borderColor: 'black',
    borderStyle: 'ridge',
    borderRadius: 10,
    width: 150,
    height: 100,
    marginLeft:'auto',
    marginRight: 'auto',
  },
});

export default App;
