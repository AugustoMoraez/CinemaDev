import { MovieContainer, Iframe} from "./style";
import { movie } from "../../Types/movieTypes";
import { Link } from "react-router-dom";

type prop = {
    movie:movie
}

export const StateMovie = ({movie}:prop) => {
    return(
        <MovieContainer>
            <h3><Link to="/">CineDev</Link></h3>
            <div className="title">
                <h1>{movie.title}</h1>
                <span>{movie.subtitle}</span>
            </div>
            <Iframe src={movie.trailer}  />
            <div className="content">
                <p>{movie.descrition}</p>
                <b>{movie.category.toUpperCase()}</b>
            </div>
           
            <button>+ Ingresso</button>
            
        </MovieContainer>
    )
}