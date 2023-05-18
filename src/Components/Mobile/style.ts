import styled from "styled-components";

export const Container = styled.div`
    display: none;
    position: absolute;
    width: 100%;
    height: 75px;
    background-color: #ff0050;
    bottom:0;
    
    ul{
        width: 100%;
        height: 75px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-top: 3px solid #f1f1f1;
        li a{
            color: #fff;
            font-size: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
                font-size: 10px;
            }
        }
        
    }
    @media (max-width:810px) {
        display: block;
    }

`;