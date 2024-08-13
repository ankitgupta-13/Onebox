import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
export const api = axios.create({
  baseURL: baseURL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
