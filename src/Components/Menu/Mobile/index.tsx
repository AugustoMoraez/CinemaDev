import { Container } from "./style";
import { Link } from "react-router-dom";
//icons
import {CiCalendarDate} from "react-icons/ci";
import {MdFastfood} from "react-icons/md";
import {BsFillTicketFill} from "react-icons/bs";

export const MobileMenu = () => {
    return(
       <Container>
        <ul>
            <li>
                <Link to="/Realeses">
                    <CiCalendarDate/>
                    <span>Lançamento</span>
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
       </Container>
    )
}