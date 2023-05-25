//Components
import { Main, Bg, Container,Content } from "./Styles/AppStyle";
import {Aside} from "./Components/Menu/aside";
import { MobileMenu } from "./Components/Menu/Mobile";
import { Menu } from "./Components/Menu/Icon";
//Libs
import {Route, Routes} from "react-router-dom";
//Paginas
import { Home } from "./Routes/Home";
import { Shop } from "./Routes/Shop";
import { Theatres } from "./Routes/in-theatres";
import {PlaceChairPage} from "./Routes/SelectPlaceRoom"
import { PageMovie } from "./Routes/page-movie";
import { Auth } from "./Routes/Auth";
//hooks
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";




export const App = () => {
  
  const movie = useSelector((state:RootState)=> state.movie) 
  const[toggle,setToggle]= useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }


  return(
    <Main>
      <Bg img={"https://images3.alphacoders.com/129/1292401.jpg"}>
          <Menu func={handleToggle} toggle={toggle} />
        <Container>
          <Content>
            <Aside display={toggle}  />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/InTheaters/:slug" element={<PageMovie/>}/> 
              <Route path="/InTheaters" element={<Theatres/>}/>
              <Route path="/select-room/:slug" element={<PlaceChairPage id={movie.MoviePage.id}/>}/>
              <Route path="/Shop" element={<Shop/>}/> 
              <Route path="/login" element={<Auth/>}/> 
            </Routes>
            <MobileMenu/>
          </Content>
        </Container>
      </Bg>
    </Main>
  )
}
