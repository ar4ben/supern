import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ReturnArrow from '../../components/ReturnArrow'
import Layout from '../../components/comic/Layout'

const ImageGallery = styled.div`
  @media screen and (min-width: 300px) {
    width: 300px;
  }
  @media screen and (min-width: 340px) {
    width: 340px;
  }
  @media screen and (min-width: 800px) {
    width: 680px;
  }
  @media screen and (min-width: 1300px) {
    width: 1020px;
  }
  @media screen and (max-width: 300px) {
    width: 150px;
  }
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`

const ImageWrapper = styled(Link)`
  @media screen and (min-width: 340px) {
    margin: 10px;
  }
`

const MainComicPage = ({
  data: {
    allFile: { edges },
  },
}) => (
  <Layout>
    <ImageGallery>
      {edges.map(edge => (
        <ImageWrapper key={`${edge.node.name}`} to={`/comic/page/${edge.node.name}`}>
          <Img fixed={edge.node.childImageSharp.fixed} />
        </ImageWrapper>
      ))}
    </ImageGallery>
    <ReturnArrow to="/comic" title="На главную" color="rgb(204, 255, 0)" />
  </Layout>
)

export const query = graphql`
  query {
    allFile(
      filter: {
        absolutePath: { regex: "/content/comic/" }
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
      }
      sort: { fields: fields___pageNumber, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
          name
        }
      }
    }
  }
`
export default MainComicPage
