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
  font-size: 8vw;
  text-align: center;
  width: 100%;
`

const MainComicPage = () => {
  const imagesResult = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          absolutePath: { regex: "content/comic/" }
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
        }
        sort: { fields: fields___pageNumber, order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `)
  const {
    allFile: { edges },
  } = imagesResult
  return (
    <React.Fragment>
      <MainTitle>ГИДРАВЛИЧЕСКИЙ СЕРЕЖА</MainTitle>
      <Link to="/comic/contents">Оглавление</Link>
      <Img fluid={edges[0].node.childImageSharp.fluid} />
      <Footer borderColor="rgba(204, 255, 0, 0.5)" textColor="rgb(204, 255, 0)" />
      <GlobalStyle />
    </React.Fragment>
  )
}
export default MainComicPage
