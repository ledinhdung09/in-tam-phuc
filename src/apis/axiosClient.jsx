// import axios from "axios";

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   timeout: 300000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// instance.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// export default instance;

import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost/Backend-API-Print-Shop/api/", // URL của server backend PHP
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
