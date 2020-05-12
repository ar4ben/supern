import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from '../../components/Footer'
import LinkToMainPage from '../../components/LinkToMainPage'

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
const MainTitle = styled.h1`
  color: rgb(204, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  text-align: center;
  margin: auto;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
`
const MainImage = styled(Img)`
  @media only screen and (max-width: 1300px) {
    width: 70%
  }
  @media only screen and (max-width: 800px) {
    width: 100%
  }
  @media only screen and (min-width: 1300px) {
    width: 50%
  }
  margin: auto 
`
const MainPageBody= styled.div`
  position: absolute; 
  top: 100%;  
  width: 100%;
`
const LinkButton = styled.div`
  @media only screen and (max-width: 420px) {
    margin-top: 5%;
  }
  display: block;
  text-align: center;
  margin-top: 1%;
  & a {
    border: 2px solid rgb(204, 255, 0);
    border-radius: 8px;
    color: rgb(204, 255, 0);
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight: 900;
    font-size: 1rem;
  }
  & a:hover {
    background-color: rgb(204, 255, 0);
    color: black;
    transition: all 1s ease-in-out;
  }
`
const LinkToMainPagePositioned = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

class MainComicPage extends React.Component {
  state = {
    windowScrollTop: 0
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      windowScrollTop: window.scrollY
    });   
  }

  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <LinkToMainPagePositioned style={{ opacity: 1 - this.state.windowScrollTop / 250 }}>
          <LinkToMainPage hoverColor='rgb(204, 255, 0)'/>
        </LinkToMainPagePositioned>
        <MainTitle style={{ opacity: 1 - this.state.windowScrollTop / 250 }}>
          ГИДРАВЛИЧЕСКИЙ
          <br />
          СЕРЕЖА
        </MainTitle>
        <MainPageBody>
          <MainImage fluid={data.file.childImageSharp.fluid}/>
          <LinkButton><Link to="/comic/page/2">Узнать, что было дальше</Link></LinkButton>
          <LinkButton><Link to="/comic/contents">Оглавление</Link></LinkButton>
          <Footer borderColor="rgba(204, 255, 0, 0.5)" textColor="rgb(204, 255, 0)" />
        </MainPageBody>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}

export const query = graphql`
  query {
    file(
      absolutePath: { regex: "content/comic/" }
      extension: { regex: "/(jpeg|jpg|gif|png)/" }
      fields: { pageNumber: { eq: 1 } }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
      fields {
        pageNumber
      }
    }
  }
`
export default MainComicPage
