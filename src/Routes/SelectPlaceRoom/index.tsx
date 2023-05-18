import { Container } from "./style";
import { rooms } from "../../API/rooms";
import {chair} from "../../Types/RoomType";
import { useState } from "react";


type Prop = {
    id:number
}

export const PlaceChairPage = ({id}:Prop) => {

    const movie = rooms[0];
    const[room,setRoom] = useState(0);
    const[chairs,setChairs] = useState<chair[]>(movie.cronogramas[room].chairs);
    
    const selectHours = (room:number ) => {
        setRoom(room);
    }
    
    return(
        <Container>
            
            <div className="header">
                <h5>Sala {id} N° <br />Selecione sua proltrona e horario:</h5>
            </div>
            <div className="btns">
                <button onClick={()=>selectHours(0)}>19:00</button>
                <button onClick={()=>selectHours(1)}>20:30</button>
                <button onClick={()=>selectHours(2)}>23:30</button>
            </div>
            <div className="room">

                <div className="chairs">
                    {chairs.map((chair)=>(
                        <div className={chair.status == "livre" ? "livre" : "ocupado"}>
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
        </Container>
    )


}