import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";

const PageStyles = styled.div`
  margin: 0 2rem 0 2rem;
  @media only screen and (min-width: 992px) {
    max-width: 80%;
    margin: 0 auto;
  }

`;

//See ../gatsby-browser.js for wrapping the whole page element with layout component
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <PageStyles>
        {children}
      </PageStyles>
      <Footer />
    </>
  )
}

export default Layout
