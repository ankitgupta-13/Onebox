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

export const getEmailThreads = async (threadId: string) => {
  if (!threadId) return;
  try {
    const response = await api.get(`/messages/${Number(threadId)}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteEmailThreads = async (threadId: string) => {
  try {
    const response = await api.delete(`/messages/${Number(threadId)}`);
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
