import styled from "styled-components";


type menuType = {
    toggle:true | false
  
}
export const Menu = styled.aside<menuType>`
    
    display:flex;
    opacity: ${props => props.toggle ? "1" : "0" } ;
    transition: 0.5s ;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: ${props => props.toggle ? "75px" : "0px" } ;
    border-right: 1px solid #ddd;
    background-color: #fff;

    nav ul,li{
        width: ${props => props.toggle ? "auto" : "0px" };       
    }
    nav ul li {
        margin-top: 50px;
        cursor: pointer;
        
        a{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            
        }
        svg{
            color: #ff0050;
            height: 40px;
            width: ${props => props.toggle ? "40px" : "0px" };
            transition: 0.6s;
            margin: 5px;
        }
        span{
            color: #fff;
            font-size: 10px;
            transition: 0.5s;
        }
        &:hover{
            svg{
                color:#ff0050;
            }
            span{
                color:#ff0050;
            }
        }
        
        
    }

`;