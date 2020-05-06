import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Footer from '../../components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: 'Exo 2', sans-serif;
  }
`
const MainTitle = styled.h1`
  color: rgb(204, 255, 0);
  font-size: 8vw;
  text-align: center;
  width: 100%;
`

const MainComicPage = () => (
  <React.Fragment>
    <MainTitle>ГИДРАВЛИЧЕСКИЙ СЕРЕЖА</MainTitle>
    <Footer borderColor="rgba(204, 255, 0, 0.5)" textColor="rgb(204, 255, 0)" />
    <GlobalStyle />
  </React.Fragment>
)
export default MainComicPage
