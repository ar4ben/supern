import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/podcasts/Layout'

const PodcastBox = styled.div`
  @media only screen and (min-width: 800px) {
    max-width: 800px;
    margin: auto;
  }
  margin: 2rem;
`

const Title = styled.h1`
  @media only screen and (min-width: 800px) {
    font-size: 3rem;
  }
  color: #4f5baa;
  text-align: left;
`
const Description = styled.p`
  @media only screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
  text-align: left;
`
const Date = styled.p`
  text-align: left;
  opacity: 0.7;
`

const Podcast = ({ data }) => (
  <Layout>
    <PodcastBox>
      <Title>{data.markdownRemark.frontmatter.title}</Title>
      <Date>{data.markdownRemark.frontmatter.date}</Date>
      <Description dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </PodcastBox>
  </Layout>
)
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: " D MMMM, YYYY", locale: "ru-RU")
      }
    }
  }
`

export default Podcast
