import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,ol{
    list-style: none;
  }
  
  html, body, #root, .App {
  height: 100%; 
  background-color: #4dbce9;
  }

  button{
    cursor: pointer;
  }

  body{
    font-family: 'Inter';
  }
  `;
