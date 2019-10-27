import React from 'react'
import LogoBlock from './LogoBlock'
// import PropTypes from 'prop-types'
// import logoSrc from './cover.jpg'
//

const Layout = ({ children }) => (
  <React.Fragment>
    <LogoBlock />
    {children}
  </React.Fragment>
)

export default Layout
