//Components
import { Main, Bg, Container,Content } from "./Styles/AppStyle";
import {Aside} from "./Components/Menu/aside";
import { MobileMenu } from "./Components/Menu/Mobile";
//Libs
import {Route, Routes} from "react-router-dom";
//Paginas
import { Home } from "./Routes/Home";
import { Shop } from "./Routes/Shop";
import { Theatres } from "./Routes/in-theatres";
import { Menu } from "./Components/Menu/Icon";
import {PlaceChairPage} from "./Routes/SelectPlaceRoom"
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
              <Route path="/select-room/:slug" element={<PlaceChairPage id={1}/>}/>
              <Route path="/Shop" element={<Shop/>}/> 
            </Routes>
            <MobileMenu/>
          </Content>
        </Container>
      </Bg>
    </Main>
  )
}
