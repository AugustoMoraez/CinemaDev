import styled from "styled-components";



export const Main = styled.main`
    background-color: #333;
`;



type bgType = {
    img :string
}
export const Bg = styled.div<bgType>`
    background-image: url(${props => props.img });
    background-position: center ;
    background-size: cover;
    height: 100vh;
`;


export const Container = styled.div`
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    display: flex;    
`;

export const Content = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    overflow-y: hidden;
    @media (max-width:810px) {
        padding-bottom:75px;
    }
`;