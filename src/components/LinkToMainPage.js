import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { UpArrowCircle } from 'styled-icons/boxicons-solid/UpArrowCircle'

const LinkToRoot = styled(Link)`
  color: white;
  &:hover {
    color: #4f5baa;
  }
  margin: 1%;
`

const LinkToMainPage = props => (
  <LinkToRoot to="/" title="SUPERNINUPER">
    <UpArrowCircle height={props.arrowHeight} />
  </LinkToRoot>
)

export default LinkToMainPage
