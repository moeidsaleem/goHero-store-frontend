import { accountApi } from './services/accountApi';
import { configureStore } from "@reduxjs/toolkit";

// reducers
import cartReducer from "./cartReducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";



export const store = configureStore({
  reducer: {cartReducer,    [accountApi.reducerPath]: accountApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({}).concat([accountApi.middleware])
});

setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
