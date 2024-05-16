import axios from "axios";

export const userQuery = axios.create({
  baseURL: "http://localhost:8080/api/user/",
});
