import { accountApi } from './services/accountApi';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// reducers
import cartReducer from "./cartReducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cartReducer,    [accountApi.reducerPath]: accountApi.reducer        
});

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer ,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({}).concat([accountApi.middleware])
});

setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
