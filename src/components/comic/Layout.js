import React from 'react'
import { createGlobalStyle } from 'styled-components'
import LinkToMainPage from '../LinkToMainPage'
import Footer from '../Footer'

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

const Layout = props => {
  const { children, noFooter, linkToRootPageStyle } = props
  return (
    <React.Fragment>
      <div style={linkToRootPageStyle}>
        <LinkToMainPage hovercolor="rgb(204, 255, 0)" />
      </div>
      {children}
      {!noFooter && <Footer borderColor="rgba(204, 255, 0, 0.5)" textColor="rgb(204, 255, 0)" />}
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Layout
