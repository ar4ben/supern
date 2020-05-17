import React from 'react'
import styled from 'styled-components'
import AudioCard from 'audiocard'
import { graphql } from 'gatsby'
import Layout from '../components/podcasts/Layout'
import ReturnArrow from '../components/ReturnArrow'
import SEO from '../components/SEO'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const PodcastBox = styled.div`
  @media only screen and (min-width: 800px) {
    max-width: 800px;
    margin: auto;
  }
  margin: 2rem;
  background-color: #ffffffc2;
  border-radius: 15px;
  padding: 1%;
`

const Title = styled.h1`
  @media only screen and (min-width: 800px) {
    font-size: 3rem;
  }
  color: #4f5baa;
  text-align: left;
  margin: 1% 0 2% 0;
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

class Podcast extends React.Component {
  handleClick = (element , soundTitle) => {
    const dAttribute = element.target.getAttribute("d")
    // hack to track click on play svg button
    if (dAttribute && dAttribute === 'M.25.125l1 .5-1 .5z') {
      trackCustomEvent({
        category: soundTitle,
        action: "Play",
        label: "Podcasts listening",
      })
    }
  }

  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO
          title={data.markdownRemark.frontmatter.title}
          description={data.markdownRemark.excerpt}
          image="/grudkilogo.png"
        />
        <PodcastBox>
          <ReturnArrow to="/podcasts" title="Вернуться" color="#666" />
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <Date>{data.markdownRemark.frontmatter.date}</Date>
          <Description dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          {/* eslint-disable-next-line*/}
          <div
            onClick={element => this.handleClick(element, data.markdownRemark.frontmatter.title)}
          >
            <AudioCard
              source={data.markdownRemark.frontmatter.soundSource}
              skipBackSeconds={10}
              skipForwardSeconds={30}
            />
          </div>
        </PodcastBox>
      </Layout>
    )
  }
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: " D MMMM, YYYY", locale: "ru-RU")
        soundSource
      }
    }
  }
`

export default Podcast
