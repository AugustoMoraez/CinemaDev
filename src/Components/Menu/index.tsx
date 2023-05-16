import {IconMenu} from "./style" ;


type HeaderType = {
    toggle:true|false,
    func:()=>void
}

export const Menu = ({toggle,func}:HeaderType) => {

    

    return (
    
        <IconMenu onClick={func} toggle={toggle}>
            
            
            <div></div>
            <div></div>
        </IconMenu>
       
    )
}