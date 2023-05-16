import styled from "styled-components";


type menuType = {
    display:boolean,
  
}
export const Menu = styled.aside<menuType>`
    
    display:flex;
    opacity: ${props => props.display ? "1" : "0" } ;
    transition: 0.5s ;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: ${props => props.display ? "75px" : "0px" } ;
    border-right: 1px solid gray;
    background-color: #000;

    nav ul,li{
        list-style: none;
        width: ${props => props.display ? "auto" : "0px" };
        
        svg{
            color: #fff;
            height: 40px;
            width: ${props => props.display ? "40px" : "0px" };
            transition: 0.6s;

            &:hover{
                color: #FF0050;
                
            }
        }
    }
    nav ul li {
        margin-top: 50px;
        cursor: pointer;
    }

`;