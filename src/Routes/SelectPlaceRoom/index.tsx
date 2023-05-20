import { Container } from "./style";
import { rooms } from "../../API/rooms";
import {chair} from "../../Types/RoomType";
import { useState } from "react";


type Prop = {
    id:number
}

export const PlaceChairPage = ({id}:Prop) => {

    const room = rooms[id];
    const[hour,setHour] = useState(0);
    const[chairs,setChairs] = useState<chair[]>(room.cronogramas[hour].chairs);
    
    const selectHours = (room:number ) => {
        setHour(room);
        console.log(chairs);
    }
    const select = (e:React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement
        
        if(element.classList.contains("ocupado" ) === false){
            if(element.classList.contains("active") === false){
                element.classList.add("active")
            }else{
                element.classList.remove("active")
            }
        }
        
    }
    
    return(
        <Container url={room.filme.pageBanner}>
            <div className="filter">

                <div className="header">
                    <h5>Sala N° {id+1}  <br />Selecione sua proltrona e horario:</h5>
                </div>
                <div className="btns">
                    <button onClick={()=>selectHours(0)}>19:00</button>
                    <button onClick={()=>selectHours(1)}>20:30</button>
                    <button onClick={()=>selectHours(2)}>23:30</button>
                </div>
                <div className="room">

                    <div className="chairs">
                        {chairs.map((chair)=>(
                            <div key={chair.id} className={chair.status == "livre" ? "livre" : "ocupado"} onClick={select}>
                                {chair.id}
                            </div>
                            
                        ))}
                    </div>

                </div>
                <div className="legenda">
                    <h2>Legenda:</h2>
                    <div className="item">
                        <div></div>
                        Livre
                    </div>
                    <div className="item">
                        <div></div>
                        Ocupado
                    </div>
                </div>
                <div className="btns">
                    <button onClick={()=>{}}>Adicionar</button>
                </div>

            </div>
        </Container>
    )


}