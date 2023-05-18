import styled from 'styled-components';



export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  h3{
    margin-top: 20px;
    font-size: 30px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,80,1) 35%, rgba(0,212,255,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .title{
    margin-bottom: 20px;
    h1{
      text-transform: capitalize;
      font-size: 80px;
    }
    span{
      color:#ff0050;
      font-weight: bold;
      
    }
  }
  .content{
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
    color: 444;
    p{
      margin-bottom: 10px;
    }
    b{
      
      margin-top: 20px;
      color: #ff0050;
    }
  }
  button{
    background-color: #ff0050;
    border-radius: 20px;
    width: 120px;
    height: 40px;
    color: #f3f3f3;
    margin-top: 20px;
    font-size: 20px;
  }
  @media (max-width:810px) {
        padding-bottom:90px ;
    }

`;
export const Iframe = styled.iframe`
  width: 50%;
  height:40vh;
  border: 0;
  @media (max-width:600px) {
    width: 90%;
    
  }
`;
