import styled from "styled-components";

export const PageContainer =  styled.div`
    
    width: calc(100vw - 75px);
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color:#333;
`;

export const NavigateSlide = styled.div`
    position: absolute;
    z-index: 99;
    top: 50%;
    transform: translate(0,-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{

        background-color: #fff;
        display: grid;
        place-items: center;
        color: #FF0050;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 20px;
        &:hover{
            cursor: pointer;
            background-color: #FF0050;
            color: #FFf;

        }
        &:focus{
            background-color: rgba(255,255,255,0.8);
            color: #FF0050;
        }
        &:last-child{
            transform: rotate(180deg);
        }
    }

`;


