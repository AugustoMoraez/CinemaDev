import { MovieContainer, Iframe} from "./style";
import { movie } from "../../Types/movie";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type prop = {
    movie:movie
}

export const StateMovie = ({movie}:prop) => {
    const nav = useNavigate();
    const user = useSelector((state: RootState) => state.user.current);
    
    const redirection = () => {
        if(user === null){
            nav("/login")
        }else{
            nav(`/select-room/${movie.title}`) 
        }
    }
    
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
           
            <button onClick={redirection}>+ Ingresso</button>
            
        </MovieContainer>
    )
}