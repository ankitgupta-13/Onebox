import { createSlice } from "@reduxjs/toolkit";

export interface mailState {
  mailThreads: [];
  isLoadingThreads: boolean;
  sendMessageIsOpen: boolean;
}

const initialState: mailState = {
  mailThreads: [],
  isLoadingThreads: false,
  sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setMailThreads: (state, action) => {
      state.mailThreads = action.payload;
    },
    setIsLoadingThreads: (state, action) => {
      state.isLoadingThreads = action.payload;
    },
  },
});

export const { setMailThreads, setIsLoadingThreads } = mailSlice.actions;

export const mailReducer = mailSlice.reducer;
