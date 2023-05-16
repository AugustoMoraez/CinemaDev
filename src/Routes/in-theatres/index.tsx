import { PageContainer, Grid } from "./style";
import { GridItem } from "../../Components/ItemGrid";
import { movies } from "../../API/movies";
import { foods } from "../../API/foods";
export const Theatres = () => {
    return(
        <PageContainer>
            <h1>CineDev</h1>
           <Grid>
                {movies.map((movie,index)=>(
                    <GridItem key={index} movie={movie} food={foods[0]}/>
                ))}
           </Grid>
        </PageContainer>
    )
}