import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import fetchCharacters from '../api/fetch';

const Characters = () => {
  const [chars, setChars] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character';
  const getCharacters = async () => {
    const res = await fetchCharacters(url);
    setChars(res.results);
  };
  useEffect(() => {
    getCharacters();
  }, [chars]);

  return (
    <ScrollView>
      {chars.map(char => (
        <View key={char.id}>
          <Text key={char.id} style={styles.text}>{char.name}</Text>
          <Image
            source={{uri: char.image}}
            key={char.name}
            style={styles.image}
          />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderColor: 'black',
    borderRadius: 80,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20,
    color: 'white',
    backgroundColor: 'lightgray',
    width: 300,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 50,
    textAlign: 'center',
  },
});
export default Characters;
