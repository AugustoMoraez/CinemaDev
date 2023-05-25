import { Item } from "./style"
import { chair } from "../../Types/RoomType";

type prop= {
    chair:chair
}

export const Chair = ({chair}:prop) => {

    const toggleColor = () => {
        
    }

    return(
        <Item >
            {chair.id}
        </Item>
    )
}