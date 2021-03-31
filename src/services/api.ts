import axios from "axios";

const api = axios.create({
  baseURL: "https://notepad-multiplatform.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
