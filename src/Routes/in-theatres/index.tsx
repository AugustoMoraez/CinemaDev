import { PageContainer, Grid } from "./style";
import { GridItem } from "../../Components/ItemGrid";
import { movies } from "../../API/movies";
import { Link } from "react-router-dom";
import { foods } from "../../API/foods";
export const Theatres = () => {
    return(
        <PageContainer>
            <h1><Link to="/">CineDev</Link></h1>
           <Grid>
                {movies.map((movie,index)=>(
                    <GridItem key={index} movie={movie} food={foods[0]}/>
                ))}
           </Grid>
        </PageContainer>
    )
}