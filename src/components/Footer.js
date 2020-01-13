import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    text-align: center;
  }
  margin: 10% 10% 1% 10%;
  padding-top: 1%;
  display: flex;
  justify-content: space-between;
  border-top: 0.5px solid #fef7f4f7;
  & a {
    text-decoration: none;
    color: #fef7f4;
    white-space: nowrap;
    padding: 0 5% 0 5%;
  }
`
const SocialLinks = styled.div`
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    text-align: center;
  }
  display: flex;
  justify-content: space-between;
`

const Footer = () => (
  <FooterWrapper>
    <div>
      <a href="mailto:bam2020@gmail.com">bam2020@gmail.com</a>
    </div>
    <div>
      <Link to="/">© 2020 BAM2020</Link>
    </div>
    <SocialLinks>
      <a target="_blank" href="https://twitter.com/bam2020">
        Twitter
      </a>
      <a target="_blank" href="https://instagram.com/bam2020">
        Instagram
      </a>
    </SocialLinks>
  </FooterWrapper>
)

export default Footer
