import React from 'react'
import { graphql } from 'gatsby'

const Podcast = ({ data }) => <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

export default Podcast
