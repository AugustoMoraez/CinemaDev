import { PageContainer, Grid } from "../in-theatres/style";
import { GridItem } from "../../Components/ItemCart";
import { foods } from "../../API/foods";

export const Shop = () => {
    return(
        <PageContainer>
            <h1>CineDev</h1>
           <Grid>
                {foods.map((item,index)=>(
                    <GridItem key={index} food={item}/>
                ))}
           </Grid>
        </PageContainer>
    )
}