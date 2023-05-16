
import { useSelector } from "react-redux";
import { PageContainer } from "./style";
import { RootState } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
import { StateMovie } from "../../Components/stateMovie";



export const PageMovie = () => {
    
    const movie = useSelector((state:RootState)=> state.movie.MoviePage)    
    const nav = useNavigate();
    return(
        <PageContainer url={movie.pageBanner}>
           <div>
               <StateMovie movie={movie}/>
           </div>
        </PageContainer>
    )
}