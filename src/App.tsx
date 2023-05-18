//Components
import { Main, Bg, Container,Content } from "./Styles/AppStyle";
import {Aside} from "./Components/aside";
import { MobileMenu } from "./Components/Mobile";
//Libs
import {Route, Routes} from "react-router-dom";
//Paginas
import { Home } from "./Routes/Home";
import { MoviesRelease } from "./Routes/movies-releases";
import { Shop } from "./Routes/Shop";
import { Theatres } from "./Routes/in-theatres";
import { Menu } from "./Components/Menu";
import { PageMovie } from "./Routes/page-movie";
//hooks
import { useState } from "react";




export const App = () => {
  // const bg = useSelector((state:RootState)=> state.bg)
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
              <Route path="/Shop" element={<Shop/>}/> 
              <Route path="/Realeses" element={<MoviesRelease/>}/>
            </Routes>
            <MobileMenu/>
          </Content>
        </Container>
      </Bg>
    </Main>
  )
}
