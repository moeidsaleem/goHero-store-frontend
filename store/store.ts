import { configureStore } from "@reduxjs/toolkit";

// reducers
import counterReducer from "./cartReducer";


export const store = configureStore({
  reducer: {counterReducer},
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;