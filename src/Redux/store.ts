import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Reducers/movieReducer";
import roomReducer from "./Reducers/roomReducer";

export const store = configureStore({
   reducer:{
    movie:movieReducer,
    room:roomReducer
   }
})

export type RootState = ReturnType< typeof store.getState>