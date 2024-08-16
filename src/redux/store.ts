import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth.slice";
import { mailSlice } from "./mail.slice";
import { themeSlice } from "./theme.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    mail: mailSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
