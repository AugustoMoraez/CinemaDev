import styled from "styled-components";


type InputAreaType = {
    toggle:boolean
}

export const InputArea = styled.div<InputAreaType>`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 20px;
    transition: 0.5s;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            display: ${props => props.toggle ? "none" : "inline" };
            font-size: 15px;
            margin-right: 10px;
            margin-bottom: -5px;
        }

        transition: 0.5s;
        cursor: pointer;
        color: #FF0050;
        font-size: 20px;
        padding: 5px;
        svg{
            margin-bottom: -6px;
        }
    }
    input{
        transition: 0.5s;
        width: ${props => props.toggle ? "90%" : "0px" };
        padding-left: ${props => props.toggle ? "10px" : "0px" };
        font-size: 20px;
        margin-right: 10px;
        background: none;
        color: #fff;
        border: 0;
        border-bottom:1px solid #FF0050;
        outline: none;
    }

`;