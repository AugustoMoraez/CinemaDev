
import { useSelector } from "react-redux";
import { PageContainer } from "./style";
import { RootState } from "../../Redux/store";
import { StateMovie } from "../../Components/stateMovie";



export const PageMovie = () => {
    
    const movie = useSelector((state:RootState)=> state.movie.MoviePage)    
    
    return(
        <PageContainer url={movie.pageBanner}>
           <div className="background-filter">
               <StateMovie movie={movie}/>
           </div>
        </PageContainer>
    )
}