import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: import.meta.env.NODE_ENV === "development" ? "http://localhost:4000/api" : "https://gup-shup-i0o3.onrender.com",
  withCredentials: true,
});
