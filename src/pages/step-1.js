import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () =>
  <div>
    <p>To get started click the button below.</p>
    <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/deploy-from-table-app">
      <img src="https://www.netlify.com/img/deploy/button.svg" title="Deploy to Netlify" />
    </a>
    <p>
    </p>
    <hr />
    <small>
      <a href="https://www.netlify.com/">Netlify</a> is a platform to deploy, stage, and maintain
      React applications. To enter 
      To find out how you can leverage some of Gatsby's built in
      features, like Prerendering, Scalable Deploys, and <a
        href="https://www.netlify.com/blog/2017/07/18/http/2-server-push-on-netlify/deploy-from-table-app">HTTP/2
        Push</a>, check out the Netlify <a
        href="https://www.netlify.com/docs/">documentation</a>. You can learn more about <a href="https://www.gatsbyjs.org/">Gatsby</a>,
      a static site generator build with React and GraphQL. 
      <br />
      <br />
      If you want to view the source code, you can do so at <a href="https://github.com/netlify/deploy-from-table-app">netlify/nodevember-gatsby-app
      </a><br />
    </small>
  </div>

export default SecondPage
