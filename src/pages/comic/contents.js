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
const MainComicPage = () => {
  const imagesResult = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          absolutePath: { regex: "content/comic/" }
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
        }
        sort: { fields: name, order: ASC }
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
      {edges.map(edge => (
        <Img
          key={edge.node.childImageSharp.fluid.src}
          fluid={edge.node.childImageSharp.fluid}
          style={{ margin: '3rem 0' }}
        />
      ))}
      <Footer borderColor="rgba(204, 255, 0, 0.5)" textColor="rgb(204, 255, 0)" />
      <GlobalStyle />
    </React.Fragment>
  )
}
export default MainComicPage
