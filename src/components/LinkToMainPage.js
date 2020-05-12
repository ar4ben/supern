import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { UpArrowCircle } from 'styled-icons/boxicons-solid/UpArrowCircle'

const LinkToRoot = styled(Link)`
  color: white;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
  margin: 1%;
`

const LinkToMainPage = props => {
  const { height, hoverColor } = props
  return (
    <LinkToRoot to="/" title="SUPERNINUPER" hoverColor={hoverColor}>
      <UpArrowCircle height={height || '3rem'} />
    </LinkToRoot>
  )
}

export default LinkToMainPage
