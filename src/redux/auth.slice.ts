import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  token: string;
}

const initialState: authState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
