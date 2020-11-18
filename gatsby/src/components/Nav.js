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
  nav{
    text-align: center;
  }
  ul  {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    font-family: Acme;
    place-items: center;
  }
  .on-page{
    &[aria-current="page"]{
      color: red;
    }
  }
`;

const Nav = () => {
  return ( 
    <NavStyles>
      <nav>
        <ul>
          <li>
            <Link className="on-page" to="/">Home</Link>
          </li>
          <li>
            <Link className="on-page" to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link className="on-page" to="/news">What's New</Link>
          </li>
          <li>
            <Link className="on-page" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </NavStyles>
   );
}
 
export default Nav;