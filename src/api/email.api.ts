import { api } from "./axiosInstance";

export const resetOnebox = async () => {
  try {
    const response = await api.get("/reset");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllMails = async () => {
  try {
    const response = await api.get("/list");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
