import React from 'react'
import { createGlobalStyle } from 'styled-components'
import LogoBlock from './LogoBlock'
// import PropTypes from 'prop-types'
// import logoSrc from './cover.jpg'
//
const GlobalStyle = createGlobalStyle`
body {
  background-color: white;
  overflow-x: hidden;
  font-family: "Roboto", Arial, sans-serif;
  color: hsla(0, 0%, 0%, 0.8);
  margin: 0;
}

body:before {
  z-index: -2;
  height: 100%;
  width: 80%;
  content: "";
  background-color: #f8d9c680;
  position: fixed;
  top: 0;
  left: 0;
  transform: skewX(-13deg) translateX(13%);
}
`
const Layout = ({ children }) => (
  <React.Fragment>
    <LogoBlock />
    {children}
    <GlobalStyle />
  </React.Fragment>
)

export default Layout
