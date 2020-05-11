import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from '../../components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: 'Exo 2', sans-serif;
  }
`
const MainTitle = styled.h1`
  color: rgb(204, 255, 0);
  font-size: 5vw;
  text-align: center;
  margin: 20% 0 20% 0;
`

const MainComicPage = ({ data }) => (
  <React.Fragment>
    <MainTitle>
      ГИДРАВЛИЧЕСКИЙ
      <br />
      СЕРЕЖА
    </MainTitle>
    <Img fluid={data.file.childImageSharp.fluid} />
    <Link to="/comic/page/2">Читать дальше</Link>
    <Link to="/comic/contents">Оглавление</Link>
    <Footer borderColor="rgba(204, 255, 0, 0.5)" textColor="rgb(204, 255, 0)" />
    <GlobalStyle />
  </React.Fragment>
)

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
