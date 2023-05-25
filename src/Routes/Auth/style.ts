import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:  #f7f7f7;
    
    h1{
        
        text-align: center;
        font-size:80px;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,80,1) 35%, rgba(0,212,255,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    
        margin-top: 30px;
    }
    form{
        display: flex;
        background-color: #fff;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-width: 350px;
        min-height:300px ;
        flex-direction: column;
        box-shadow: 2px 0px 5px #333;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        padding: 10px;
        border-top-right-radius: 40px;
        border-bottom-left-radius: 40px;
        label{
            font-weight: 600;
            color: #ff0050;
        }
        input{
            width: 100%;
            height: 20px;
            font-size: 17px;
            border: none;
            outline: none;
            border-bottom: 1px #333 solid;
            padding: 2px;
            margin-top: 10px;
            font-weight: 100;
        }
        button{
            background-color: #ff0050;
            color: #fff;
            border-radius: 10px;
            width: 100%;
            max-width: 100px;
            padding: 7px 20px;
            border: 1px #fff solid;
            &:hover{
                background-color: #fff;
                color: #ff0050;
                border: 1px #ff0050 solid;
            }
        }
       

    }

`;