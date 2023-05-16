import styled from "styled-components";

export const Item = styled.div`
    display:flex ;
    justify-content: space-between;
    align-items: center;
    background-color: #ff0050;
    opacity: 0.8;
    width: 100%;
    height: 70px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 5px;
    transition: 0.5s;
    cursor: pointer;
    
    img{
        width: 40px;
        height: 40px;
        border-radius: 7px;
        margin-right: 10px;
    }
    span{
        margin-right: auto;
        text-transform: capitalize;

        b{ 
            color: rgb(177 24 72);;
        }
    }
    &:hover{
        background-color: #fff;
        color:#ff0050;
        margin-left: 10px;
        opacity: 1;
        
       
    }
    @media(max-width:810px){
        &:hover{
        background-color: #fff;
        color:#ff0050;
        opacity: 1;
        margin-left: 0px;
        }
    }

`;