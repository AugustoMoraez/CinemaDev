import { food } from "../../Types/food";
import { movie } from "../../Types/movieTypes";
import { Item } from "./style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMoviePage } from "../../Redux/Reducers/movieReducer";
import {BsFillTicketFill} from "react-icons/bs";


type prop = {
    movie?:movie,
    food:food

    
}

export const GridItem =({movie,food}:prop)=> {
    
    const nav = useNavigate();

    const dispactch = useDispatch();
    

    
    return(
        
            <Item img={movie === undefined ? food.img : movie.pageBanner } >
                <div></div>
                <h2>{movie === undefined ? food.name : movie.title}</h2>
                <span>Preço:R${movie === undefined ? food.price : movie.ticketPrice},00 </span>
                <br />
                <span>
                    {movie === undefined 
                    ?
                    ""
                    :
                    movie.category
                    }
                </span>
                <button onClick=
                    {
                        movie===undefined 
                        ? 
                        ()=>"" 
                        :
                        ()=>{dispactch(setMoviePage(movie)),nav(`/InTheaters/${movie.title}`)}
                    }
                >Obter</button>
            </Item>
    )
}