const fetchData = (pageNumber) => {
  const ENDPOINT = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default fetchData;
