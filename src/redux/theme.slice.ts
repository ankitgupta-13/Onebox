import { createSlice } from "@reduxjs/toolkit";

export interface themeState {
  theme: "light" | "dark";
}

const initialState: themeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const authReducer = themeSlice.reducer;
