import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { UpArrowCircle } from 'styled-icons/boxicons-solid/UpArrowCircle'

const LinkToRoot = styled(Link)`
  color: white;
  &:hover {
    color: ${({ hovercolor }) => hovercolor};
  }
  padding: 6px;
  display: block;
`

const LinkToMainPage = props => {
  const { height, hovercolor } = props
  return (
    <LinkToRoot to="/" title="SUPERNINUPER" hovercolor={hovercolor}>
      <UpArrowCircle height={height || '3rem'} />
    </LinkToRoot>
  )
}

export default LinkToMainPage
