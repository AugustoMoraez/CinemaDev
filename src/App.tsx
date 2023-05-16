//Components
import { Main, Bg, Container,Content } from "./Styles/AppStyle";
import {Aside} from "./Components/aside";
//Libs
import {Route, Routes} from "react-router-dom";
//Paginas
import { Home } from "./Routes/Home";
import { MoviesRelease } from "./Routes/movies-releases";
import { Shop } from "./Routes/Shop";
import { Promotion } from "./Routes/Promotion";
import { Theatres } from "./Routes/in-theatres";
import { Menu } from "./Components/Menu";
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
              {/* <Route path="/slug" element={<Shop/>}/> */}
              <Route path="/InTheaters" element={<Theatres/>}/>
              <Route path="/Shop" element={<Shop/>}/> 
              <Route path="/Realeses" element={<MoviesRelease/>}/>
            </Routes>
          </Content>
        </Container>
      </Bg>
    </Main>
  )
}
