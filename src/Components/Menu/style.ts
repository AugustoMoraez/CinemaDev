import styled from "styled-components";





type IconMenuType = {
    toggle:boolean
}

export const IconMenu = styled.div<IconMenuType>`
   
    position: relative;
    cursor: pointer;
    margin-left: 20px;
    span{
        
        position: absolute;
        top: 50px;
        color: #fff;
        transition: 0.5s;
        margin-left: -15px;
        font-weight: 600;
        z-index: 99;

        &:hover{
            color:#FF0050;
        }
    }
    .icon{
        &:hover{
        
        div{
         
         transition: 0.6s;
         background-color: #FF0050;
        } 
       
     
        }

        div{
            z-index: 99;
            top: 25px;
            height: 8px;
            width: 30px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            background-color: #fff;
            position: absolute;
            
        }
        div:first-child{
           
            transform: ${props => props.toggle ? "rotate(45deg)" : "rotate(0)" };
        }
        div:last-child{
            top:${props => props.toggle ? "25px" : "35px" };
            transform: ${props => props.toggle ? "rotate(-45deg)" : "rotate(0)" };
        }
    }
    @media (max-width:810px) {
        display: none;
    }
    
    
    `;
