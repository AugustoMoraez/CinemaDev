import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "MovieToShow",
    initialState: {
       
        MoviePage:{
            id: 0,
            title: "avatar",
            trailer: "https://www.youtube.com/watch?v=G1fymUSI4cc",
            subtitle: "THE WAY OF WATER",
            pageBanner: "https://images3.alphacoders.com/129/1292401.jpg",
            category: "Ação",
            ticketPrice: 25,
            descrition: "Os humanos desejam explorar a lua a fim de encontrar metais valisos, o que faz os Na'Vi aperfeiçoarem suas habilidades guerreiras. Como são incapazes de respirar o ar de Pandora, os humanos criam seres híbridos chamados de Avatar. Eles são comandados por seres humanos, através de uma tecnologia que permite que seus pensamentos sejam aplicados no corpo do Aavata"
        }
    },
    reducers:{
        
        setMoviePage: (state, action) => {
            state.MoviePage = action.payload
        }
    }
})

export const { setMoviePage } = slice.actions;
export default slice.reducer;