import { Container } from "./style";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Reducers/userReducer";
import { useNavigate } from "react-router-dom";




export const Auth = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const dispatch = useDispatch();
    const nav = useNavigate()
    
    const handleInputEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleInputPassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const Authenticate = (email:string,password:string) =>{
        if(email.indexOf("@")> -1 && password.length > 8){
           dispatch(setUser({
            current:{email,password}
           })) 
           nav("/");
        }
    }
    
    return(
       <Container>
            <h1>CineDev</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required onChange={handleInputEmail} placeholder="Insira um email valido" />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" required onChange={handleInputPassword} placeholder="Senha de 8 caracteres" />
                </div>
                <button onClick={()=>Authenticate(email,password)}>Entrar</button>
            </form>
       </Container>
    )
}