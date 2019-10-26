import React from "react"
import PropTypes from "prop-types"
//import "./layout.css"
import { createGlobalStyle } from "styled-components"
import Navbar from "../components/globals/navbar"
//import "./layout.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family:'Open Sans', sans-serif;
  color: #262626;
  background: #fff;
}
:root {
  --mainOrange: #f15025;
}
body {
  font-family: "Caveat", cursive;
  color: black;
  background: white;
}

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
