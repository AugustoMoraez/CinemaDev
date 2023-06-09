import {BsSearch} from "react-icons/bs";
import { InputArea } from "./style";
import {useState, ChangeEvent} from "react";



type InputSearchType ={
    func: (e:ChangeEvent<HTMLInputElement>)=> void
}

export const InputSearch = ({func}:InputSearchType) => {
    const[toggle,setToggle] = useState(false);

    
    
    return (
        <InputArea toggle={toggle}>
            <button onClick={()=>setToggle(!toggle)}  ><span>Buscar</span><BsSearch /></button>
            <input type="text" onChange={func} placeholder="Exemplo:A Feira..." />
        </InputArea>
    )

}