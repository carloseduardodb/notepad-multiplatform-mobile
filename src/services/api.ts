import axios from "axios";

const api = axios.create({
  baseURL: "https://notepad-multiplatform.herokuapp.com/api",
});

export default api;
