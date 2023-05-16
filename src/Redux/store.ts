import { configureStore } from "@reduxjs/toolkit";
import bgReducer from "./Reducers/movieReducer";

export const store = configureStore({
   reducer:{
    bg:bgReducer
   }
})

export type RootState = ReturnType< typeof store.getState>