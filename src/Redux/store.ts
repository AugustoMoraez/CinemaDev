import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Reducers/movieReducer";

export const store = configureStore({
   reducer:{
    movie:movieReducer
   }
})

export type RootState = ReturnType< typeof store.getState>