import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: 'Exo 2', sans-serif;
  }

`

const ComicPage = ({ data }) => (
  <React.Fragment>
    <Link to={`comic/page/${data.file.fields.pageNumber - 1}`}>Предыдущая страница</Link>
    <Link to={`comic/page/${data.file.fields.pageNumber + 1}`}>Следующая страница</Link>
    <Img fluid={data.file.childImageSharp.fluid} />
    <Footer borderColor="rgba(204, 255, 0, 0.5)" textColor="rgb(204, 255, 0)" />
    <GlobalStyle />
  </React.Fragment>
)

export const query = graphql`
  query($pageNumber: Int!) {
    file(
      absolutePath: { regex: "content/comic/" }
      extension: { regex: "/(jpeg|jpg|gif|png)/" }
      fields: { pageNumber: { eq: $pageNumber } }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      fields {
        pageNumber
      }
    }
  }
`
export default ComicPage
