import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Telegram } from 'styled-icons/fa-brands/Telegram'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { Facebook } from 'styled-icons/boxicons-logos/Facebook'

const FooterWrapper = styled.div`
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    text-align: center;
    & div {
      width: 100% !important;
    }
  }
  font-family: 'Kanit', sans-serif;
  margin: 5% 10% 1% 10%;
  padding-top: 1%;
  display: flex;
  justify-content: space-between;
  border-top: 0.5px solid ${({ borderColor }) => borderColor};
  & div {
    margin: 0 1% 0 1%;
    width: 33.3333%;
  }
  & a {
    text-decoration: none;
    opacity: 0.7;
    color: ${({ textColor }) => textColor};
    white-space: nowrap;
  }
`
const SocialLinks = styled.div`
  @media only screen and (min-width: 740px) {
    & a {
      margin-left: 5%;
    }
  }
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    text-align: center;
  }
  display: flex;
  justify-content: flex-end;
`

const RootLink = styled.div`
  text-align: center;
`

const Footer = props => (
  <FooterWrapper borderColor={props.borderColor} textColor={props.textColor}>
    <div>
      <a href="mailto:superninuper@gmail.com">superninuper@gmail.com</a>
    </div>
    <RootLink>
      <Link to="/">© 2020 SUPERNINUPER</Link>
    </RootLink>
    <SocialLinks>
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/superninuper">
        <Instagram height="2rem" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/superninuper">
        <Twitter height="2rem" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/superninuper">
        <Facebook height="2rem" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/superninuper">
        <Telegram height="2rem" />
      </a>
    </SocialLinks>
  </FooterWrapper>
)

export default Footer
