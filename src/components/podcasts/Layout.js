import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import { UpArrowCircle } from 'styled-icons/boxicons-solid/UpArrowCircle'
import Footer from '../Footer'
import LogoBlock from './LogoBlock'
import backgroundImage from '../../pages/podcasts/img/podcasts-background.jpeg'

// import PropTypes from 'prop-types'

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
const LinkToMainPage = styled(Link)`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    color: #4f5baa;
  }
  margin: 1%;
`

const Layout = ({ children }) => (
  <React.Fragment>
    <LinkToMainPage to="/" title="SUPERNINUPER">
      <UpArrowCircle height="3rem" />
    </LinkToMainPage>
    <Link to="/podcasts">
      <LogoBlock />
    </Link>
    {children}
    <Footer borderColor="hsla(0,0%,0%,0.6)" textColor="hsla(0,0%,0%,0.8)" />
    <GlobalStyle />
  </React.Fragment>
)

export default Layout
