import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Wave from '../components/mainPage/Wave'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 1%;
    background-color: #c96567;
    font-family: 'Kanit', sans-serif;
  }
`
const BigLogo = styled.h1`
  margin-top: 10%;
  color: #c96567;
  font-size: 13vw;
  position: absolute;
  top: 0%;
  width: 100%;
  text-align: center;
`
const WaveContainer = styled.div`
  position: relative;
`
const Project = styled.div`
  @media only screen and (max-width: 740px) {
    font-size: 8vw;
  }
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: 3vw;
  font-weight: 600;
  font-family: 'Exo 2', sans-serif;
  margin: 0 0 1em 0;
  & a {
    text-decoration: none;
    color: #fef7f4;
  }
`

const MainPage = () => (
  <React.Fragment>
    <SEO image="/superlogo.png" />
    <WaveContainer>
      <BigLogo>SUPERNINUPER</BigLogo>
      <Wave />
    </WaveContainer>
    <Project>
      <Link to="/comic">НАРОДНЫЙ КОМИКС</Link>
    </Project>
    <Project>
      <Link to="/podcasts">ПОДКАСТ</Link>
    </Project>
    <Footer borderColor="#fef7f47a" textColor="#fef7f4" />
    <GlobalStyle />
  </React.Fragment>
)

export default MainPage
