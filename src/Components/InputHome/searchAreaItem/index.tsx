import { movie } from "../../../Types/movieTypes";
import { Item } from "./style";
import {AiOutlineRight} from "react-icons/ai"



type itemSearch = {
    data:movie
}

export const ItemSearch = ({data}:itemSearch) => {
    return(
        <Item>
            <img src={data.pageBanner} />
            <span>{data.title} - {data.subtitle} <br />  <b>{data.category}</b> </span>
            <AiOutlineRight/>
        </Item>
    )
}