import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Reducers/movieReducer";
import roomReducer from "./Reducers/roomReducer";
import userReducer from "./Reducers/userReducer";

export const store = configureStore({
   reducer:{
      user:userReducer,
      movie:movieReducer,
      room:roomReducer
   }
})

export type RootState = ReturnType< typeof store.getState>