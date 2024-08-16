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
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getEmailThreads = async (threadId: number) => {
  if (!threadId) return;
  try {
    const response = await api.get(`/messages/${threadId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteEmailThreads = async (threadId: number) => {
  console.log(threadId);
  try {
    const { data } = await api.delete(`/messages/${threadId}`);
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {
    console.error(error);
  }
};
