import styled from "styled-components";

type prop = {
    img:string,
}
export const Item = styled.div<prop>`
    position: relative;
    text-align: center;
    background-color: #fff;
    
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 2px 0px 5px #333;
    
    transition: 0.3s;
    div{
    width: 100%;
    height: 300px;
    background-image: url(${(prop)=>prop.img});
    background-position: center;
    background-size: cover;
   
    }
    button{        
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,80,1) 1%, rgba(0,212,255,1) 100%);
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        margin: 10px auto ;
        width: 120px;
        height: 30px;
        border-radius: 20px;
        cursor: pointer;
    }
    h2{
        margin-top: 10px;
        margin-bottom: 5px;
        text-transform:capitalize ;
        color: #ff5f6d;
    }
    span{
        font-style: italic;
        color: #666666;
    }
    &:hover{
        background-color: #eee;
        
    }
    
`;