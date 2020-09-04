const ENDPOINT = "http://loremricksum.com/api/?paragraphs=1&quotes=1";

const fetchQuotes = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default fetchQuotes;
