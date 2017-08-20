import React from 'react'
import TwitterCards from '../components/TwitterCards';

const IndexPage = () =>
  <div>
    <p>By deploying this site on Netlify, you are 1 step away from a chance to win a Nintendo Switch. Select a tweet from the list below confirm your chance to win.</p>
    <TwitterCards />
    <p><a href="#">Netlify</a> is a platform to deploy, stage, and maintain
      React applications. To find out how you can leverage some of Gatsby's built in
      features, like Prerendering, Scalable Deploys, and <a
        href="https://www.netlify.com/blog/2017/07/18/http/2-server-push-on-netlify/">HTTP/2
        Push</a>, check out the Netlify <a
        href="https://www.netlify.com/docs/">documentation</a>.</p>
    <p>You can learn more about <a href="https://www.gatsbyjs.org/">Gatsby</a>,
      a static site generator build with React and GraphQL.</p>
  </div>

export default IndexPage
