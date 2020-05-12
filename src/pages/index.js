import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'

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
  & path {
    animation: slidein 40s linear infinite alternate;
  }
  @keyframes slidein {
    0% {
      d: path('M -600 350 Q -400 250 300 300 Q 700 320 800 300 L 800 0 L 0 0 Z');
    }
    50% {
      d: path('M 0 300 Q 500 -10 800 300 Q 1000 500 1400 300 L 1400 0 L 0 0 Z');
    }

    100% {
      d: path('M 0 300 Q 1500 300 2000 300 Q 1000 500 1400 300 L 1400 0 L 0 0 Z');
    }
  }
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
    <WaveContainer>
      <BigLogo>SUPERNINUPER</BigLogo>
      <svg
        fill="black"
        stroke="none"
        xmlns="http://www.w3.org/2000/svg"
        id="contact-wave"
        viewBox="0 0 800 350"
        preserveAspectRatio="none"
      >
        <path />
      </svg>
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
