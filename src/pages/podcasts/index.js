import { graphql, Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {PlayCircle} from 'styled-icons/boxicons-regular/PlayCircle'
import AudioCard from 'audiocard'
import Layout from '../../components/podcasts/Layout'
import SEO from '../../components/SEO'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
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
  @media only screen and (min-width: 740px) {
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
  }
  position: relative;
  width: 33.333%;
  padding-bottom: 33.333%;
  transition: all 0.5s ease-in-out;
`
const Container = styled.div`
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    width: 50%;
  }
  @media only screen and (max-width: 420px) {
    width: 90%;
  }
  @media only screen and (min-width: 740px) {
    &:hover ${Convert} {
      filter: blur(1px) sepia(50%);
    }
  
    &:hover ${Convert}:hover {
      filter: blur(0px);
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.7);
    }
  }
  max-width: 800px;
  margin: auto;
  padding: 1.5%;
  flex-wrap: wrap;
  display: flex;
  background-color: #ffffffc2;
  border-radius: 25px;
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
  overflow: hidden;
`
const Title = styled.div`
  word-wrap: break-word;
  width: 80%;
  text-align: center;
  border-bottom: 1px solid #ffffffb8;
  border-left: 1px solid #ffffffb8;
  border-radius: 3px;
  text-transform: uppercase;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
`

const PlayButton = styled(PlayCircle)`
  color: #ffffffcc;
  width: 20%;
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    color: #4f5baa;
  }
`
const AudioBox = styled.div`
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
  @media only screen and (max-width: 740px) {
    margin-left: -25%;
  }
  @media only screen and (max-width: 420px) {
    margin-left: -5%;
  }
  position: fixed;
  bottom: 0;
  transition: all 0.5s ease-in-out; 
  width: 800px;
  background-color: #ffffffc2;
`

class AllPodcasts extends React.Component {
  state = {
    isActive: false,
    currentSoundSource: '',
    currentSoundTitle: ''
  }

  handlePlayClick = (element , soundSource, soundTitle) => {
    element.preventDefault()
    trackCustomEvent({
      category: soundTitle,
      action: "Play",
      label: "Podcasts listening",
    })
    this.setState(state => ({ isActive: true, currentSoundSource: soundSource, currentSoundTitle: soundTitle }))
  }

  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO
          title="Грудки нараспашку"
          description="лучший подкаст во Вселенной"
          image="/grudkilogo.png"
        />
        <Container>
          { data.allMarkdownRemark.edges.map(({ node }) => (
            <Convert key={node.id}>
              <Link to={node.fields.slug}>
                <Disk fixed={data.disk.childImageSharp.fixed} />
                <Cover />
                <TextBox>
                  <Title>{node.frontmatter.title}</Title>
                </TextBox>
                <PlayButton onClick={(element) => this.handlePlayClick(element,node.frontmatter.soundSource,node.frontmatter.title)} />
              </Link>
            </Convert>
          ))}
          { this.state.isActive &&
            <AudioBox>
              <AudioCard
                title={this.state.currentSoundTitle}
                source={this.state.currentSoundSource}
                skipBackSeconds={10}
                skipForwardSeconds={30}
                autoPlay
              />
            </AudioBox>
          }
        </Container>
      </Layout>
    )
  }
}

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
            soundSource
          }
          fields {
            slug
          }
          id
        }
      }
    }
    disk: file(relativePath: { regex: "/podcasts/img/disk.png/" }) {
      childImageSharp {
        fixed(width: 935, height: 950) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AllPodcasts
