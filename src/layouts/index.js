import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {HeaderTitle, Header1} from '../styles/Typography'
import {HeaderPadding, BodyPadding} from '../styles/Padding'
import HeaderStyle from '../styles/HeaderStyle'

import './index.css'

const Header = () =>
  <HeaderStyle>
    <HeaderPadding>
      <Header1>
        {window && window.location.pathname === '/' ?
          <HeaderTitle>
            Congratulations on deploying a <a href="https://www.gatsbyjs.org/">Gatsby</a> site on <a href="https://netlify.com">Netlify</a>.
          </HeaderTitle>
        :<HeaderTitle>
          Deploy <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/react-rally-gatsby-app">Gatsby</a> to <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/react-rally-gatsby-app">Netlify</a> to win a Switch
        </HeaderTitle>}
      </Header1>
    </HeaderPadding>
  </HeaderStyle>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Gatsby Netlify Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <BodyPadding>
      {children()}
    </BodyPadding>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
