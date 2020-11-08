import React from 'react';
import styled from "styled-components";
import {Link} from "gatsby";
import Logo from "./Logo";
import font from "../assets/fonts/Acme-Regular.ttf"

const NavStyles = styled.div`
   @font-face {
     font-family: Acme;
     src: url(${font});
   }
   
  ul  {
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    font-family: Acme;
    place-items: center;
  }
`;

const Nav = () => {
  return ( 
    <NavStyles>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </NavStyles>
   );
}
 
export default Nav;