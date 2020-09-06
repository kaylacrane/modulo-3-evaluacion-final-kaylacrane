const fetchData = (searchType) => {
  const ENDPOINT = `https://rickandmortyapi.com/api/character/${searchType}`;
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default fetchData;
