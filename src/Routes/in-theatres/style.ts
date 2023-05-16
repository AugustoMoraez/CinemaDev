import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #333;
    h1{
        text-align: center;
        font-size:80px;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,80,1) 35%, rgba(0,212,255,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
    @media(max-width:530px){
        
        
    
        h1{
            font-size:50px;
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr) );
    width:100%;
    max-width:1440px;
    margin: auto;
    

`;