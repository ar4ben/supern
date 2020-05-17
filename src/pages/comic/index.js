import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import SEO from '../../components/SEO'
import Footer from '../../components/Footer'
import Layout from '../../components/comic/Layout'

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
  @media only screen and (max-width: 800px) {
    z-index: 0
  }
  position: absolute; 
  top: 100%;  
  width: 100%;
  z-index: -1;
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
    const opacity = 1 - this.state.windowScrollTop / 250
    const linkToRootPageStyle  = { opacity: opacity, position: 'fixed' }
    return (
      <Layout noFooter linkToRootPageStyle ={linkToRootPageStyle }>
        <SEO
          title="Гидравлический Сережа"
          description="народный комикс"
          image={data.file.childImageSharp.fluid.src}
        />
        <MainTitle style={{ opacity: opacity }}>
          ГИДРАВЛИЧЕСКИЙ
          <br />
          СЕРЕЖА
        </MainTitle>
        <MainPageBody>
          <MainImage fluid={data.file.childImageSharp.fluid}/>
          <LinkButton><Link to="/comic/page/2">Продолжить историю</Link></LinkButton>
          <LinkButton><Link to="/comic/contents">Содержание</Link></LinkButton>
          <Footer borderColor="rgba(204, 255, 0, 0.5)" textColor="rgb(204, 255, 0)" />
        </MainPageBody>
      </Layout>
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
