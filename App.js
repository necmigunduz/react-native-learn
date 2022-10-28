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
      <Text style={styles.dummyText}>Rick and Morty Homepage</Text>
      <Characters style={styles.chars} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: '25%',
  },
  dummyText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    padding: '3%',
  },
  chars: {
    fontWeight: 'bold',
  },
  image: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    width: 400,
    height: 200,
  },
});

export default App;
