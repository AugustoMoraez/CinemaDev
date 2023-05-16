import { food } from "../../Types/food"
import { movie } from "../../Types/movieTypes"
import { Item } from "./style"


type prop = {
    movie?:movie,
    food:food

    
}

export const GridItem =({movie,food}:prop)=> {
    return(
        
            <Item img={movie === undefined ? food.img : movie.pageBanner }>
                <div></div>
                <h2>{movie === undefined ? food.name : movie.title}</h2>
                <span>Preço:R${movie === undefined ? food.price : movie.ticketPrice},00 </span>
                {movie === undefined 
                    ?
                    ""
                    :
                    <>
                    <span>| R${(movie.ticketPrice / 2).toFixed(0)},00</span>
                    <br />
                    </>
                    
                }
                <span>
                    {movie === undefined 
                    ?
                    ""
                    :
                    movie.category
                    }
                </span>
                <button>+</button>
            </Item>
    )
}