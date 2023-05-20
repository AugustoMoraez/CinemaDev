import { MovieContainer, Iframe} from "./style";
import { movie } from "../../Types/movieTypes";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

type prop = {
    movie:movie
}

export const StateMovie = ({movie}:prop) => {
    const nav = useNavigate();
    
    
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
           
            <button onClick={()=>{nav(`/select-room/${movie.title}`)}} >+ Ingresso</button>
            
        </MovieContainer>
    )
}