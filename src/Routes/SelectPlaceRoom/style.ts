import styled from "styled-components";


type prop = {
    url:string
}

export const Container = styled.div<prop>`
    width: 100%;
    height: 100vh;
    background-image: url(${(prop)=> prop.url});
    background-size: cover;
    background-position: center;
    
    
    .filter{
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        padding: 10px;
        padding-bottom: 75px;
    }
    
    .header{
        h5{
            text-align: center;
            font-size: 20px;
            margin: 10px ;
        }
    }
    .btns{
        width: 100%;
        max-width: 600px;
        margin: auto;
        height: 75px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        button{
            background-color: #ff0050;
            color: #fff;
            font-size: 20px;
            padding: 8px 10px;
            border-radius: 18px;
            &:hover,&:focus{
                background-color: #fff;
                color:#ff0050;
                cursor: pointer;
            }
        }
        
    }
    .room{
        width: 100%;
        max-width: 600px;
        background-color: #333;
        border-radius: 10px;
        margin: 20px auto;
        .chairs{
            width: 100%;
            max-width: 600px;
            display: grid;
            grid-template-columns: repeat(9,minmax(10px,1fr));
            padding: 20px;
            grid-gap: 10px;
            grid-column-start:auto ;
            justify-content: center;
            align-items: center;
            
            
            @media (max-width:1140px) {
                
            }
        }
        .ocupado,.livre{
            border-radius: 5px;
            width: 100%;
            text-align: center;
            color: #fff;
            cursor: pointer;
        }
        .ocupado{
            background-color: gray;
        }
        .livre{
            background-color: #ff0050;
        }
        .active{
           background-color: #fff;
           color:#ff0050;
        }
    }
    .legenda{
        width: 100%;
        max-width: 600px;
        padding: 10px;
        margin: auto;
        .item{
            margin: 10px;
            display: flex;
            div{
                margin-right: 10px;
                background-color: #ff0050;
                width: 25px;
                height: 25px;
                border-radius: 50%;
            }
        }
        .item:last-child{
            div{
                background-color: gray;
            }
        }
    }
`;