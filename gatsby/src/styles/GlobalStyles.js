import {createGlobalStyle} from "styled-components";
import font from "../assets/fonts/Raleway-VariableFont_wght.ttf"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Raleway;
    src: url(${font});
  }
  :root {
    --black: #2E2E2E;
  }
  body{
    font-size: 1rem;
    font-family: Raleway, sans-serif;
  }
  ul {
    list-style:none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:visited {
    color: var(--black)
  } 

`
 
export default GlobalStyles;