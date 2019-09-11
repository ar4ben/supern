const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // TODO: use filenames but check for duplicates
    const { relativeDirectory } = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: `/${relativeDirectory}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/podcast.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
