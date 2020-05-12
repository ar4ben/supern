import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import LinkToMainPage from '../LinkToMainPage'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    background-color: black;
    font-family: 'Exo 2', sans-serif;
  }
`
const LinkToMainPagePositioned = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

const Layout = ({ children }) => (
  <React.Fragment>
    <LinkToMainPagePositioned>
      <LinkToMainPage hoverColor="rgb(204, 255, 0)" />
    </LinkToMainPagePositioned>
    {children}
    <GlobalStyle />
  </React.Fragment>
)

export default Layout
