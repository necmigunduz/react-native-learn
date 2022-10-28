import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import dice from './assets/dice.png'
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Create your first React Native App</Text>
      <Image source={dice} width={200} height={200} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '40%',
  },
  dummyText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginLeft: '10%',
  },
  image: {
    marginLeft: '10%',
  },
});

export default App;
