import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    
  }
  body{
    font-family: 'inter',sans-serif;
  }
  button, a{
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
    transition: 0.5s;
  }
  
`;
//font logo name font-family: 'Quicksand', sans-serif;