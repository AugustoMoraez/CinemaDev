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


    const selectHours = (hour: number) => {
        setHours(hour);
        chairsSelect = [];
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
            console.log(chairsSelect)
        } else {
            chairsSelect.push(id)
            console.log(chairsSelect)
        }
    }

    return (
        <Container url={roomState.filme.pageBanner}>
            <div className="filter">

                <div className="header">
                    <h5>Sala N° {id + 1}  <br />Selecione sua proltrona e horario:</h5>
                </div>
                <div className="btns">
                    <button onClick={() => selectHours(0)}>19:00</button>
                    <button onClick={() => selectHours(1)}>20:30</button>
                    <button onClick={() => selectHours(2)}>23:30</button>
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