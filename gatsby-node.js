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
  } else if (node.absolutePath && node.absolutePath.includes('content/comic')) {
    createNodeField({
      node,
      name: `pageNumber`,
      value: parseInt(node.name, 10),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const podcasts = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "content/podcasts/" } }) {
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
  const comicPages = await graphql(`
    query {
      allFile(
        filter: {
          absolutePath: { regex: "content/comic/" }
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
        }
      ) {
        edges {
          node {
            fields {
              pageNumber
            }
          }
        }
      }
    }
  `)
  podcasts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/podcast.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  comicPages.data.allFile.edges.forEach(({ node }, index, arr) => {
    createPage({
      path: `comic/page/${node.fields.pageNumber}`,
      component: path.resolve(`./src/templates/comicPage.js`),
      context: {
        pageNumber: node.fields.pageNumber,
        lastPage: arr.length,
      },
    })
  })
}

// for debugging in develop mode
// TODO: comment in production
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     devtool: 'eval-source-map',
//   })
// }
