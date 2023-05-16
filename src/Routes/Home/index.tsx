import { PageContainer,BannerArea,SearchArea} from "./style";
import {BsFillTicketFill} from "react-icons/bs";

import { InputSearch } from "../../Components/inputSearch";
import { ItemSearch } from "../../Components/searchAreaItem";
import { movies } from "../../API/movies";
import { ChangeEvent, useState } from "react";
import { movie } from "../../Types/movieTypes";





export const Home = () => {
    
    const[filter,setFilter] = useState<movie[]>([]);
      
    const handleInputFilter = (e:ChangeEvent<HTMLInputElement>) => {
        let filterName = e.target.value;
        let newArray:movie[] = [];
        for(let i = 0 ; i<=9 ; i++){
            if(movies[i].title.includes(filterName)){
                newArray.push(movies[i]);    
            }
            
        }
        setFilter(newArray)
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
                        filter.length === 0 
                        ?
                        movies.map((item)=>(
                            <ItemSearch key={item.id} data={item} />
                        ))
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