import { PageContainer, Grid } from "../in-theatres/style";
import { GridItem } from "../../Components/ItemGrid";
import { foods } from "../../API/foods";
import { Link } from "react-router-dom";

export const Shop = () => {
    return(
        <PageContainer>
            <h1><Link to="/">CineDev</Link></h1>
           <Grid>
                {foods.map((item,index)=>(
                    <GridItem key={index} food={item}/>
                ))}
           </Grid>
        </PageContainer>
    )
}