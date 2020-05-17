import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'

const SEO = ({ title, description, image }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)
  const defaults = data.site.siteMetadata
  const { pathname } = useLocation()
  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: `${defaults.siteUrl}${image}`,
    url: `${defaults.siteUrl}${pathname}`,
  }
  return (
    <Helmet>
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      {image && <meta name="image" content={seo.image} />}

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {image && <meta property="og:image" content={image} />}

      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={post.author.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}
