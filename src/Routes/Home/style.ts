import styled from "styled-components";

export const PageContainer = styled.div`
    overflow: scroll;
    overflow-x: hidden;
    color: #fff;
    display: flex;
    width: 100%;
    @media(max-width:810px){
        flex-direction: column;
        margin-top:60px;
    }
`;
export const BannerArea = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        font-weight: 100;
        margin-left: 30px;
        cursor: default;
    }
    .bar{
        width: 100px;
        height: 1px;
        background-color: gray;
    }
    .title{
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 30px;
        h1{
            font-size: 170px;
            font-weight: 300;
            cursor: default;
        }
        span{
            cursor: default;
           letter-spacing: 10px;
           margin-left: 30px;
           
        }
        @media(max-width:1100px){
            
            
            
            h1{
                font-size: 120px;
                
            }
            

        }
        @media(max-width:530px){
            
            margin: 0;
            
            h1{
                font-size: 70px;
                text-align: center;
                margin: 0;
            }
            span{
                text-align: center;
                font-size: 10px;
                margin: 0;
            }

        }
    }
    .buttons{
        margin-left: 30px;
        margin-top: 20px;
        button{
            background-color: #FF0050;
            color: #fff;
            padding: 10px;
            border-radius: 26px;
            font-size: 20px;
            
            cursor: pointer;
            svg{
                margin-bottom: -2px;
                margin-right: 5px;
            }
            &:hover{
                background-color: #fff;
                color:#FF0050;
            }
            
        }
        a{
            cursor: pointer;
            background:none;
            color: #FF0050;
            margin-left: 20px;
            font-size: 20px;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    @media(max-width:810px){
        flex:1;
    }
    @media(max-width:530px){
        .buttons{
            button{
                font-size: 15px;

            }
            
            
            
        }                 
            

    }
`;
export const SearchArea = styled.div`
    flex: 1;
    height: 100%;
    border-left:1px solid gray ;

    .resultArea{
        display: flex;
        flex-direction: column;
        margin:35px 20px  ;
    }
    
    @media(max-width:810px){
        flex:2;
        border: none;
        border-top:1px solid #FF0050 ;
        margin-top: 20px;
    }

`;
