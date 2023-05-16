//components
import {Menu} from "./style";
//libs
import { useNavigate } from "react-router-dom";
//icons
import {CiCalendarDate} from "react-icons/ci";
import {MdFastfood} from "react-icons/md";
import {BsFillTicketFill} from "react-icons/bs";



type asideType = {
    display:boolean
   
}

export const Aside = ({display}:asideType) => {

    const nav = useNavigate();
    
    
    return(
        <Menu display = {display} >
            <nav>
                <ul>
                    <li onClick={()=>nav("/Realeses")}><CiCalendarDate/></li>
                    <li onClick={()=>nav("/InTheaters")}><BsFillTicketFill/></li>
                    <li onClick={()=>nav("/Shop")}><MdFastfood/></li>
                </ul>
            </nav>
        </Menu>
    )
}