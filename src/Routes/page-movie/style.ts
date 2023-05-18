import styled from "styled-components";

type Prop = {
    url:string
}

export const PageContainer = styled.div<Prop>`
    width: 100%;
    height: 100vh;
    background-image: url(${prop => prop.url});
    background-position: center;
    background-size: cover;
    overflow-y: scroll;
    
    .background-filter{
        background-color: rgba(0,0,0,0.5);
        padding: 7px;
        height: inherit;
        width: inherit;

        
    }
`;