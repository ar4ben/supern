import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ArrowGoBack } from 'styled-icons/remix-line/ArrowGoBack'

const ReturnButton = styled(Link)`
  display: flex;
  justify-content: center;
  color: ${({ color }) => color};
`
const ReturnArrow = props => {
  const { to, title, color } = props
  return (
    <ReturnButton to={to} title={title} color={color}>
      <ArrowGoBack height="3rem" />
    </ReturnButton>
  )
}

export default ReturnArrow
