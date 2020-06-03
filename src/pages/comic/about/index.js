import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ReturnArrow from '../../../components/ReturnArrow'
import Layout from '../../../components/comic/Layout'
import SEO from '../../../components/SEO'

const MainImage = styled(Img)`
  @media only screen and (min-width: 800px) {
    width: 50%;
  }
  @media only screen and (min-width: 1500px) {
    width: 30%;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  margin: auto;
`
const AboutText = styled.div`
  @media only screen and (min-width: 800px) {
    width: 50%;
  }
  @media only screen and (min-width: 1500px) {
    width: 30%;
  }
  @media only screen and (max-width: 800px) {
    width: 90%;
    font-weight: 900;
    font-size: 1rem;
  }
  margin: 1rem auto 2rem auto;
  font-size: 1.5rem;
  color: rgb(204, 255, 0);
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

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Гидравлический Сережа - о проекте"
        description="народный комикс"
        image={data.file.childImageSharp.fluid.src}
      />
      <MainImage fluid={data.file.childImageSharp.fluid} />
      <AboutText>
        <p>
          {` Мы привыкли, что самое интересное всегда происходит где-то там. Крутые проекты, крутые
          герои, крутые события. Мы привыкли, что железный человек - это не у нас, у нас железным
          может быть только занавес.`}
        </p>
        <p>
          {` Но пришло время творить нашу историю. Именно поэтому "Гидравлический Серёжа" - это
          народный комикс. Почему народный? Потому что делать это нужно всем вместе. Мы вместе будем
          решать, какие события должны случиться и как они должны развиваться. Мы вместе создадим
          своих героев. И мы вместе придумаем эпическую историю, которой будем гордиться.`}
        </p>
        <p>
          {` Будем общаться посредством соцсетей, и абсолютно любой человек сможет предложить абсолютно
          любую идею. Какой бы масштабной, странной или бредовой она не казалась. Мы будем
          обсуждать, выбирать, голосовать. Будем делать это шаг за шагом, каждый раз задавая себе
          один простой вопрос: "что было дальше?"`}
        </p>
        <p> И мы сделаем это.</p>
      </AboutText>
      <Navigation>
        <ReturnArrow to="/comic" title="На главную" color="rgb(204, 255, 0)" />
      </Navigation>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { regex: "/comic/about/img/serezha.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default AboutPage
