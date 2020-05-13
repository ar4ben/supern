import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { RightArrowCircle } from 'styled-icons/boxicons-regular/RightArrowCircle'
import { LeftArrowCircle } from 'styled-icons/boxicons-regular/LeftArrowCircle'
import { BookContent } from 'styled-icons/boxicons-regular/BookContent'
import ReturnArrow from '../components/ReturnArrow'
import Layout from '../components/comic/Layout'

const MainImage = styled(Img)`
  @media only screen and (min-width: 800px) {
    width: 50%;
  }
  @media only screen and (min-width: 1500px) {
    width: 40%;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  margin: auto;
`
const Navigation = styled.div`
  @media only screen and (min-width: 800px) {
    width: 50%;
  }
  @media only screen and (min-width: 1500px) {
    width: 30%;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  display: flex;
  margin: auto;
  padding: 0 1rem 0 1rem;
  box-sizing: border-box;
  justify-content: space-evenly;
  a {
    color: rgb(204, 255, 0);
  }
`
const ToBeContinuedText = styled.div`
  color: rgb(204, 255, 0);
  text-align: center;
  margin: 2rem 0 3rem 0;
  font-size: 2rem;
`

const ComicPage = ({ data }) => {
  const currPage = data.file.fields.pageNumber
  const lastPage = data.allFile.edges.length
  return (
    <Layout>
      <MainImage fluid={data.file.childImageSharp.fluid} />
      {currPage === lastPage ? <ToBeContinuedText>Продолжение следует...</ToBeContinuedText> : null}
      <Navigation>
        {currPage > 1 ? (
          <Link to={`/comic/page/${data.file.fields.pageNumber - 1}`} title="Предыдущая страница">
            <LeftArrowCircle height="3rem" />
          </Link>
        ) : null}
        <Link to="/comic/contents" title="Содержание">
          <BookContent height="3rem" />
        </Link>
        <ReturnArrow to="/comic" title="На главную" color="rgb(204, 255, 0)" />
        {currPage < lastPage ? (
          <Link to={`/comic/page/${data.file.fields.pageNumber + 1}`} title="Следующая страница">
            <RightArrowCircle height="3rem" />
          </Link>
        ) : null}
      </Navigation>
    </Layout>
  )
}

export const query = graphql`
  query($pageNumber: Int!) {
    file(
      absolutePath: { regex: "content/comic/" }
      extension: { regex: "/(jpeg|jpg|gif|png)/" }
      fields: { pageNumber: { eq: $pageNumber } }
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
    allFile(
      filter: {
        absolutePath: { regex: "content/comic/" }
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
      }
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`
export default ComicPage
