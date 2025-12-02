import axios from "axios";

const api = axios.create({
  baseURL: "localhost:5075/",
  withCredentials: true,
});

export default api;
