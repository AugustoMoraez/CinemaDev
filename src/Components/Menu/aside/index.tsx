//components
import {Menu} from "./style";
//libs
import { Link } from "react-router-dom";
//icons
import {CiCalendarDate} from "react-icons/ci";
import {MdFastfood} from "react-icons/md";
import {BsFillTicketFill} from "react-icons/bs";



type asideType = {
    display:boolean
   
}

export const Aside = ({display}:asideType) => {

  
    
    return(
        <Menu display = {display} >
            <nav>
                <ul>
                    <li>
                       <Link to="/Realeses">
                            <CiCalendarDate/>
                            <span>Lançamentos</span>
                       </Link>
                       
                    </li>

                    <li>
                        <Link to="/InTheaters">
                            <BsFillTicketFill/>
                            <span>Em cartaz</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Shop">
                            <MdFastfood/>
                            <span>FastFood</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Menu>
    )
}