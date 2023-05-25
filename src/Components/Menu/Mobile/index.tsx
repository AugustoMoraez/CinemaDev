import { Container } from "./style";
import { Link } from "react-router-dom";
//icons
import { MdFastfood } from "react-icons/md";
import { BsFillTicketFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
//reducers
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/Reducers/userReducer";
import { RootState } from "../../../Redux/store";


export const MobileMenu = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.current);


    return (
        <Container>
            <ul>
                <li>
                    {user === null
                        ?
                        <Link to="/login" >
                            <FaUserAlt />
                            <span>Login</span>
                        </Link>
                        :
                        <Link onClick={() => dispatch(setUser({ current: null }))} to="/">
                            <FaUserAlt />
                            <span>Logout</span>
                        </Link>
                    }
                </li>
                <li>
                    <Link to="/InTheaters">
                        <BsFillTicketFill />
                        <span>Em cartaz</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Shop">
                        <MdFastfood />
                        <span>FastFood</span>
                    </Link>
                </li>
            </ul>
        </Container>
    )
}