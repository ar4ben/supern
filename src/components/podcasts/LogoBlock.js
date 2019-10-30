import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

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
  margin: 2%;
  overflow: hidden;
`
const LogoBlock = () => (
  <StaticQuery
    query={graphql`
      query {
        logoLeft: file(relativePath: { regex: "/podcasts/logo-left.png/" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoVinyl: file(relativePath: { regex: "/podcasts/logo-vinyl.png/" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoRight: file(relativePath: { regex: "/podcasts/logo-right.png/" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Logo>
        <Img fixed={data.logoLeft.childImageSharp.fixed} />
        <LogoSpin fixed={data.logoVinyl.childImageSharp.fixed} />
        <Img fixed={data.logoRight.childImageSharp.fixed} />
      </Logo>
    )}
  />
)

export default LogoBlock
