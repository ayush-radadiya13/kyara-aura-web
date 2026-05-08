import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
