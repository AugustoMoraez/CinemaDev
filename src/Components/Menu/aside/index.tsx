//components
import { Menu } from "./style";
//libs
import { Link } from "react-router-dom";
//icons
import { FaUserAlt } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { BsFillTicketFill } from "react-icons/bs";
//reducer
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/Reducers/userReducer";
import { RootState } from "../../../Redux/store";




type asideType = {
    display: boolean

}

export const Aside = ({ display }: asideType) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.current);


    return (
        <Menu display={display} >
            <nav>
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
            </nav>
        </Menu>
    )
}