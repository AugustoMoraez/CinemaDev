import {IconMenu} from "./style" ;
import { useNavigate } from "react-router-dom";


type HeaderType = {
    toggle:true|false,
    func:()=>void
}

export const Menu = ({toggle,func}:HeaderType) => {

    const nav = useNavigate();
    

    return (
     
        <IconMenu  toggle={toggle}>
            
            <div className="icon" onClick={func}>
                <div></div>
                <div></div>
            </div>
            <span onClick={()=>nav(-1)} >VOLTAR</span>
        </IconMenu>
 
    )
}