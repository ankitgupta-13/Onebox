import { api } from "./axiosInstance";

export const login = async () => {
  try {
    console.log(window.location.origin);
    const data = await api.get(
      `/auth/google-login?redirect_to=${window.location.origin}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
