import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`,
  timeout: 10000, // 10 seconds
  headers: { "Content-Type": "application/json" },
});

export default api;
