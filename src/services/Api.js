import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Get all users
export const getUsers = () => API.get("/users");

// Get user by ID
export const getUserById = (id) => API.get(`/users/${id}`);

export default API;
