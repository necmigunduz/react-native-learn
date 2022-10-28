const fetchCharacters = async url => {
  const res = await fetch(url);
  const characters = res.json();
  return characters;
};

export default fetchCharacters;
