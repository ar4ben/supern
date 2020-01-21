import styled, { createGlobalStyle } from 'styled-components'
import React from 'react'
import { UpArrowCircle } from 'styled-icons/boxicons-solid/UpArrowCircle'
import { Link } from 'gatsby'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 1%;
    background-color: #c96567;
    font-family: 'Kanit', sans-serif;
  }
`
const Code = styled.h1`
  color: #fef7f4;
  text-align: center;
  font-size: 20vw;
  font-weight: 600;
  font-family: 'Exo 2', sans-serif;
  margin: 2%;
`
const ErrorText = styled.h2`
  color: #fef7f4;
  text-align: center;
  font-size: 5vw;
  font-weight: 600;
  font-family: 'Exo 2', sans-serif;
`
const LinkToMainPage = styled(Link)`
  color: white;
  &:hover {
    color: #4f5baa;
  }
  margin: 1%;
`

const Page404 = () => (
  <React.Fragment>
    <Code>404</Code>
    <ErrorText>
      страница не найдена{' '}
      <LinkToMainPage to="/" title="SUPERNINUPER">
        <UpArrowCircle height="6rem" />
      </LinkToMainPage>
    </ErrorText>
    <Footer borderColor="#fef7f47a" textColor="#fef7f4" />
    <GlobalStyle />
  </React.Fragment>
)
export default Page404
