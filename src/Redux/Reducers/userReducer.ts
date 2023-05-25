import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name:"CurrentUser",
    initialState:{current:null},
    reducers:{
        setUser:(state,action)=>{
            console.log(action.payload)
            return {...state, current:action.payload.current};
        }
        
    }
})



export const { setUser } =slice.actions 
export default slice.reducer