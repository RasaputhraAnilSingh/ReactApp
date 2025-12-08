import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // sample public API
});

// Example: Get all users
export const getUsers = () => API.get("/users");

export default API;



