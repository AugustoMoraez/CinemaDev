import styled from "styled-components";

type prop = {
    img:string,
}
export const Item = styled.div<prop>`
    position: relative;
    text-align: center;
    background-color: #444;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    transition: 0.3s;
    div{
    width: 100%;
    height: 300px;
    background-image: url(${(prop)=>prop.img});
    background-position: center;
    background-size: cover;
   
    }
    button{
        cursor: pointer;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(255,0,80,1) 35%, rgba(0,212,255,1) 100%);
        color: #fff;
        font-size: 24px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        top: 76%;
        left: 50%;
        transform: translate(-50%, -76%);
        cursor: pointer;
    }
    h2{
        margin-top: 50px;
        margin-bottom: 5px;
        text-transform:capitalize ;
        color: #ff5f6d;
    }
    span{
        font-style: italic;
  color: #666666;
    }
    &:hover{
        background-color: #555;
        
    }
    
`;