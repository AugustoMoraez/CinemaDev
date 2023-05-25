import { movie } from "../../../Types/movie";
import { Item } from "./style";
import { AiOutlineRight } from "react-icons/ai"
import { RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMoviePage } from "../../../Redux/Reducers/movieReducer";


type itemSearch = {
    data: movie
}


export const ItemSearch = ({ data }: itemSearch) => {
    const nav = useNavigate();
    const dispatch = useDispatch()
    const redirection = () => {
        dispatch(setMoviePage(data))
        nav(`/InTheaters/${data.title}`)
    }
    return (
        <Item onClick={redirection}>
            <img src={data.pageBanner} />
            <span>{data.title} - {data.subtitle} <br />  <b>{data.category}</b> </span>
            <AiOutlineRight />
        </Item>
    )
}