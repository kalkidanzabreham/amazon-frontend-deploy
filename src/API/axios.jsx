import axios from "axios";
export const axiosInstance = axios.create({
  // locally
  // baseURL: "http://localhost:7777",
  // deployed on render.com
  baseURL: "https://amazon-api-deploy-xgo6.onrender.com",
});
