import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5075/api/",
  withCredentials: false, // true
});

export default api;
