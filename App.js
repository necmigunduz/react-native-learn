import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Characters from './components/Characters';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://images7.alphacoders.com/751/751400.png'}}
        alt="rickandmorty"
        style={styles.topImage}
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
    backgroundColor: 'black',
    marginTop: 15,
    borderRadius: 10,
    padding: 50,
    top: -55,
    width: '100%',
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
  },
  topImage: {
    width: 120,
    height: 90,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default App;
