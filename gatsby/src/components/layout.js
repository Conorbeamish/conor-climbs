import React from "react";
import Nav from "../components/Nav";
import GlobalStyles from "../styles/GlobalStyles";

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
