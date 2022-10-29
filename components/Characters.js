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
      <View style={styles.container}>
        {chars.map(char => (
          <>
            <View key={char.id}>
              {char.image ? (
                <Image
                  source={{uri: char.image}}
                  key={char.name}
                  style={styles.image}
                />
              ) : (
                <Text style={styles.text}>No image found.</Text>
              )}
              <Text style={styles.text}>{char.name}</Text>
            </View>
          </>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  image: {
    borderColor: 'white',
    borderWidth: 2,
    width: 250,
    height: 280,
    borderRadius: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
    backgroundColor: 'darkblue',
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    marginTop: 5,
    textAlign: 'center',
    letterSpacing: 2,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
  },
});
export default Characters;
