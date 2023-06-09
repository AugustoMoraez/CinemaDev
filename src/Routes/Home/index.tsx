import { PageContainer,BannerArea,SearchArea} from "./style";
import {BsFillTicketFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { InputSearch } from "../../Components/InputHome/inputSearch";
import { ItemSearch } from "../../Components/InputHome/searchAreaItem";
import { movies } from "../../API/movies";
import { ChangeEvent, useState } from "react";
import { movie } from "../../Types/movie";





export const Home = () => {
    const[filterVoid,setFilterVoid] = useState(false)
    const[filter,setFilter] = useState<movie[]>([movies[6],movies[9],movies[3]]);
      
    const handleInputFilter = (e:ChangeEvent<HTMLInputElement>) => {
        setFilterVoid(false);
        let filterName = e.target.value as string
        let newArray:movie[] = [];
        newArray = movies.filter((item)=>{
            return item.title.toLocaleLowerCase().indexOf(filterName.toLocaleLowerCase()) > -1
        })
        if(newArray.length > 1){
            setFilterVoid(true);
        }
        setFilter(newArray);
    }
    
    return(
      
        <PageContainer>
            <BannerArea>
                <h2>Junio, 17 Action,Thriller</h2>
                <div className="bar"></div>
                <div className="title">
                    <h1>Avatar 2</h1>
                    <span>THE WAY OF THE WATER</span>
                </div>
                <div className="bar"></div>
                <div className="buttons">
                    <button><BsFillTicketFill/>Ingresso</button>
                    <a href="https://www.youtube.com/watch?v=x5pZI-DmtrE" target="_blank">Trailer</a>
                </div>
            </BannerArea>
            <SearchArea>
                <div className="inputArea">
                    <InputSearch func={handleInputFilter}/>
                </div>
                <div className="resultArea">
                    {
                        filterVoid === true 
                        ?
                        <div>
                            Filme não encontrado<br/>
                            <Link to="/InTheaters">Veja sugestões aqui</Link>
                            
                        </div>
                        :
                        filter.map((item)=>(
                            <ItemSearch key={item.id} data={item} />
                        ))
                    }
                    
                </div>
            </SearchArea>
        </PageContainer>

    
    )
}