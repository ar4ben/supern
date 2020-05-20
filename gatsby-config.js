/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Superninuper',
    description: 'Праздник в жизни',
    siteUrl: 'https://superninuper.by/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-166880703-1',
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon.png`,
        name: `SUPERNINUPER`,
        short_name: `SUPERNINUPER`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `#c96567`,
        display: `standalone`,
        // cache_busting_mode: `none`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //     workboxConfig: {
    //       globPatterns: ['**/*'],
    //     },
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
