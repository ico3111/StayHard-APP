import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5075/api/",
  withCredentials: true, // true
});

// Se ocorrer erro unauthorized, retorna ao login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
