import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const queryParams = new URLSearchParams(window.location.search);
const token = queryParams.get("token") || localStorage.getItem("token");
export const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
