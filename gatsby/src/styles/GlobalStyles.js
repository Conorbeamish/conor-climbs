import {createGlobalStyle} from "styled-components";
import Raleway from "../assets/fonts/Raleway-VariableFont_wght.ttf";
import Acme from "../assets/fonts/Acme-Regular.ttf"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Raleway;
    src: url(${Raleway});
  }
  @font-face {
    font-family: Acme;
    src: url(${Acme});
  }
  :root {
    --black: #2E2E2E;
    --grey: #808080;
  }
  body{
    font-size: 1rem;
    font-family: Raleway, sans-serif;
    letter-spacing: 0.05rem;
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

  h1, h2, h3, h4 {
    font-family: acme;
    letter-spacing: 0.075rem;
  }
`
 
export default GlobalStyles;