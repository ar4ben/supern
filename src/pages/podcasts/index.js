import { graphql, Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const AllPodcasts = ({ data }) =>
  data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
      <Link to={node.fields.slug}>{node.frontmatter.test_field}</Link>
    </div>
  ))

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/podcasts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            test_field
            date
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`
export default AllPodcasts
