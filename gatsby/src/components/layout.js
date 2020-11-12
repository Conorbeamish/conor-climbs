import React from "react";
import Nav from "../components/Nav";
import GlobalStyles from "../styles/GlobalStyles";

//See ../gatsby-browser.js for wrapping the whole page element with layout component
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      {children}
    </>
  )
}

export default Layout
