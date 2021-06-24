import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ac9bccd1002c662a62612f8082494fbe";

// export const apiServices = {
//   trending: () => {
//     return axios
//       .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
//       .then(function (response) {
//         console.log(response);
//         return response.data;
//       });
//   },
// };

// export default apiServices;

export const trending = () =>
  axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(function (response) {
      //   console.log(response);
      return response.data;
    });

export const fullMovieData = (movieId) =>
  axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(function (response) {
      console.log(response);
      return response.data;
    });
