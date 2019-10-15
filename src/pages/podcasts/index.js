import { graphql, Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import logoSrc from './cover.jpg'
//

const LogoSpin = styled(Img)`
  animation: spin 10s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
`
const Cover = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
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
  position: relative;
  width: 33%;
  padding-bottom: 33%;
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
  width: 50%;
  margin: auto;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;

  &:hover ${Convert} {
    filter: blur(1px) sepia(50%);
  }

  &:hover ${Convert}:hover {
    filter: blur(0px);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.7);
  }
`

// imageSharp(id: { regex: "/cover/" }) {
//   fixed(width: 125, height: 125) {
//     ...GatsbyImageSharpFixed
//   }
// }

// logoVinyl: file(relativePath: { regex: "/logo-vinyl.png/" }) {
//   childImageSharp {
//     fluid(maxWidth: 225) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
const AllPodcasts = ({ data }) => (
  <React.Fragment>
    <Logo>
      <Img fixed={data.logoLeft.childImageSharp.fixed} />
      <LogoSpin fixed={data.logoVinyl.childImageSharp.fixed} />
      <Img fixed={data.logoRight.childImageSharp.fixed} />
    </Logo>
    <Container>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Convert key={node.id}>
          <Link to={node.fields.slug}>
            <Disk fixed={data.logoVinyl.childImageSharp.fixed} />
            <Cover src="https://picsum.photos/300" className="cover" />
          </Link>
        </Convert>
      ))}
    </Container>
  </React.Fragment>
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
            test_field
            date
          }
          fields {
            slug
          }
          id
        }
      }
    }
    logoLeft: file(relativePath: { regex: "/logo-left.png/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logoVinyl: file(relativePath: { regex: "/logo-vinyl.png/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logoRight: file(relativePath: { regex: "/logo-right.png/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AllPodcasts
