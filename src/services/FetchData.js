const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchData = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default fetchData;
