import axios from "axios";

const api = axios.create({
  baseURL: "/api", // React will automatically forward to localhost:5000
});

export default api;
