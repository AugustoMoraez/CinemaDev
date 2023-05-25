import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name:"CurrentUser",
    initialState:{current:null},
    reducers:{
        setUser:(state,action)=>{
            return {...state, current:action.payload};
        }
        
    }
})



export const { setUser } =slice.actions 
export default slice.reducer