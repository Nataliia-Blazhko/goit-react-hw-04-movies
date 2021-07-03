import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ac9bccd1002c662a62612f8082494fbe";

export const trending = async () => {
  const result = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return result.data;
};

export const fullMovieData = async movieId => {
  const result = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  return result.data;
};

export const searchMovies = async (query, page = 1) => {
  const result = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return result.data;
};

export const getCast = async movieId => {
  const result = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return result.data;
};

export const getReview = async movieId => {
  const result = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return await result.data;
};

// export const trending2 = async () => {
//   const result = await axios.get(
//     `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
//   );
//   return await result.data;
// };

// export const trending3 = async () => {
//   const result = await fetch(
//     `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
//   );
//   const data = await result.json();

//   return data;
// };
