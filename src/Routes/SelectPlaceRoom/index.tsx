import { Container } from "./style";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Sala } from "../../Types/RoomType";


type Prop = {
    id: number
}

export const PlaceChairPage = ({ id }: Prop) => {

    const room = useSelector((state: RootState) => state.room);
    const roomState:Sala = room[id] as Sala;
    const [hours, setHours] = useState(0);
    const chairs = roomState.cronogramas[hours].chairs;
    let chairsSelect: number[] = []


    const selectHours = (e: React.MouseEvent,hour: number) => {
        setHours(hour);
        chairsSelect = [];
        const btn = e.target as HTMLDivElement;
        const btns = btn.parentElement as HTMLDivElement;

        let array = btns.querySelectorAll("button");
        array.forEach((item)=>{
            item.classList.remove("active")
        })
        btn.classList.add("active")
        

        const filter = btns.parentElement ;
        if(filter !== null){
            const chairs = filter.querySelector(".room")?.querySelector(".chairs");
            const elements = chairs?.querySelectorAll(".livre");
            elements?.forEach((item)=>{
                item.classList.remove("active");
            })            
        }  
        
    }

    const Select = (e: React.MouseEvent) => {
        const element = e.target as HTMLDivElement;
        if (element.classList.contains("ocupado") === false) {
            if (element.classList.contains("active") === false) {
                element.classList.add("active")
            }
            else {
                element.classList.remove("active");
            }
        }
    }
    const handleChairsArray = (id: number) => {
        if (chairsSelect.find(item => item === id)) {
            const array = chairsSelect.filter(item => item !== id);
            chairsSelect = array;
        } else {
            chairsSelect.push(id)
        }
    }

    return (
        <Container url={roomState.filme.pageBanner}>
            <div className="filter">

                <div className="header">
                    <h5>Sala N° {id + 1}  <br />Selecione sua proltrona e horario:</h5>
                </div>
                <div className="btns">
                    <button onClick={(e) => selectHours(e,0)}>19:00</button>
                    <button onClick={(e) => selectHours(e,1)}>20:30</button>
                    <button onClick={(e) => selectHours(e,2)}>23:30</button>
                </div>
                <div className="room">
                    <div className="chairs">
                        {chairs.map((chair) => (
                            <div key={chair.id} className={chair.status == "livre" ? "livre" : "ocupado"}
                                onClick={(e) => { Select(e); handleChairsArray(chair.id) }}>
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
                    <button onClick={() => { }}>Adicionar</button>
                </div>

            </div>
        </Container>
    )


}