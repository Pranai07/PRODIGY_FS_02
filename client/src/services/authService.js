import axios from "axios";

const API = axios.create({
  baseURL: "https://your-render-url.onrender.com/api",
  withCredentials: true,
});

export const loginUser = (data) => API.post("/auth/login", data);

export const registerUser = (data) => API.post("/auth/register", data);

export const getProfile = () =>
  API.get("/users/me", {
    withCredentials: true,
  });