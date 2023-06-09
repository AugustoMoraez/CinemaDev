import { food } from "../../Types/food";
import { movie } from "../../Types/movie";
import { Item } from "./style";
import { useNavigate } from "react-router-dom";
//reducers
import { setMoviePage } from "../../Redux/Reducers/movieReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";



type prop = {
    movie?:movie,
    food:food

    
}

export const GridItem =({movie,food}:prop)=> {
    
    const nav = useNavigate();

    const dispatch = useDispatch();
    
    const user = useSelector((state:RootState) => state.user.current);
    
    const redirection = () => {
        if(movie === undefined){
            if(user === null){
                nav("/login")
            }

        }else{
            dispatch(setMoviePage(movie))
            nav(`/InTheaters/${movie.title}`) 
        }
    }

    
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
                <button onClick={redirection} >Obter</button>
            </Item>
    )
}