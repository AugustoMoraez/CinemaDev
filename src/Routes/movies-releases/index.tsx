import { PageContainer, NavigateSlide } from "./style";
import {AiOutlineDoubleLeft} from "react-icons/ai"


export const MoviesRelease = () => {   
    return(
        <PageContainer>
            <NavigateSlide>
                <button><AiOutlineDoubleLeft/></button>
                <button><AiOutlineDoubleLeft/></button>
            </NavigateSlide>
        </PageContainer>
    )
}