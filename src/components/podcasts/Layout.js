import React from 'react'
import { createGlobalStyle } from 'styled-components'
import LogoBlock from './LogoBlock'
// import PropTypes from 'prop-types'
// import logoSrc from './cover.jpg'
//
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fef7f4;
    overflow-x: hidden;
    font-family: "Roboto", Arial, sans-serif;
    color: hsla(0, 0%, 0%, 0.8);
    margin: 0;
  }

  body:before {
    z-index: -2;
    height: 100%;
    width: 50%;
    content: "";
    background-color: #c96567;
    position: fixed;
    top: 0;
    left: 0;
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
