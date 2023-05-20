import { createSlice } from "@reduxjs/toolkit";
import { rooms } from "../../API/rooms";


export const slice = createSlice({
    name:"selectRoom",
    initialState:rooms,
    reducers:{
        EditRoom:()=>{

        },
        
    }
})
