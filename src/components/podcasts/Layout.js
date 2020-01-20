import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import Footer from '../Footer'
import LogoBlock from './LogoBlock'
import backgroundImage from '../../pages/podcasts/img/podcasts-background.jpeg'
// import PropTypes from 'prop-types'
// import logoSrc from './cover.jpg'
//
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fef7f4;
    overflow-x: hidden;
    font-family: 'Exo 2', sans-serif;
    color: hsla(0, 0%, 0%, 0.8);
    margin: 0;
    background: url(${backgroundImage}) no-repeat center center fixed; 
    background-size: cover;
  }
`
const Layout = ({ children }) => (
  <React.Fragment>
    <Link to="/podcasts">
      <LogoBlock />
    </Link>
    {children}
    <Footer borderColor="hsla(0,0%,0%,0.6)" textColor="hsla(0,0%,0%,0.8)" />
    <GlobalStyle />
  </React.Fragment>
)

export default Layout
