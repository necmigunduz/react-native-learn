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
          <Text key={char.id} style={styles.text}>
            {char.name}
          </Text>
          {char.image ? (
            <Image
              source={{uri: char.image}}
              key={char.name}
              style={styles.image}
            />
          ) : (
            <Text style={styles.text}>No image found.</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderRadius: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    color: 'white',
    backgroundColor: 'lightgray',
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 40,
    textAlign: 'center',
  },
});
export default Characters;
