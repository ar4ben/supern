import { graphql, Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import './index.css'
import Layout from '../../components/podcasts/Layout'
// import PropTypes from 'prop-types'
// import logoSrc from './cover.jpg'
//

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #4f5baa;
  opacity: 0.2;
  border: 1px solid grey;
`
const Disk = styled(Img)`
  position: absolute !important;
  top: 5% !important;
  left: 5% !important;
  width: 90% !important;
  height: 90% !important;
  transition: all 1s ease-in-out;
`
const Convert = styled.div`
  @media only screen and (max-width: 740px) {
    width: 100%;
    padding-bottom: 100%;
  }
  position: relative;
  width: 33.333%;
  padding-bottom: 33.333%;
  transition: all 0.5s ease-in-out;
  animation: nohovering 1s linear;
  @keyframes nohovering {
    0% {
      z-index: 3;
    }
    100% {
      z-index: 0;
    }
  }

  &:hover {
    transform: scale(1.2);
    animation: hovering 1s linear forwards;
  }
  @keyframes hovering {
    0% {
      z-index: 3;
    }
    100% {
      z-index: 3;
    }
  }

  &:hover ${Disk} {
    transform: translateX(52%);
  }
`
const Container = styled.div`
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    width: 50%;
  }
  @media only screen and (max-width: 420px) {
    width: 90%;
  }
  max-width: 800px;
  margin: auto;
  flex-wrap: wrap;
  display: flex;

  &:hover ${Convert} {
    filter: blur(1px) sepia(50%);
  }

  &:hover ${Convert}:hover {
    filter: blur(0px);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.7);
  }
`
const TextBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  word-wrap: break-word;
  width: 80%;
  text-align: center;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  border-radius: 3px;
  text-transform: uppercase;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
`

const AllPodcasts = ({ data }) => (
  <Layout>
    <Container>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Convert key={node.id}>
          <Link to={node.fields.slug}>
            <Disk fixed={data.disk.childImageSharp.fixed} />
            {/* <Cover src={`https://picsum.photos/300?x=${node.id}`} className="cover" /> */}
            <Cover />
            <TextBox>
              <Title>{node.frontmatter.title}</Title>
            </TextBox>
          </Link>
        </Convert>
      ))}
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/podcasts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          id
        }
      }
    }
    disk: file(relativePath: { regex: "/podcasts/disk.png/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AllPodcasts
