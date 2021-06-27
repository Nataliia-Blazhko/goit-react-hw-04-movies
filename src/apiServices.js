import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ac9bccd1002c662a62612f8082494fbe";

export const trending = () =>
  axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(function (response) {
      return response.data;
    });

export const fullMovieData = movieId =>
  axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(function (response) {
      return response.data;
    });

export const searchMovies = (query, page = 1) =>
  axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    )
    .then(function (response) {
      return response.data;
    });

export const getCast = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(function (response) {
      return response.data;
    });
};

export const getReview = movieId =>
  axios
    .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(function (response) {
      return response.data;
    });

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
