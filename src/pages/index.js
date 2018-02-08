import React from 'react'
import TwitterCards from '../components/TwitterCards';
import Link from 'gatsby-link'
import eventData from '../../data/eventData.json'
import tweetData from '../../data/tweets.json'

const IndexPage = () =>
  <div>
    {eventData.giveaway && <p>By deploying this site on <strong>Netlify</strong>, you are 1 step away from a chance to win a <strong>{eventData.prize}</strong> at <strong>{eventData.name}</strong>. Select and tweet from the list below confirm your chance to win. You may edit the tweet, but ensure that you include the <strong>{tweetData.hashtag}</strong> hashtag and a link you site.</p>}
    <TwitterCards />
    <hr />
    <small>
      <a href="https://www.netlify.com/">Netlify</a> is a platform to deploy, stage, and maintain
      React applications. To find out how you can leverage some of Gatsby's built in
      features, like Prerendering, Scalable Deploys, and <a
        href="https://www.netlify.com/blog/2017/07/18/http/2-server-push-on-netlify/">HTTP/2
        Push</a>, check out the Netlify <a
        href="https://www.netlify.com/docs/">documentation</a>. You can learn more about <a href="https://www.gatsbyjs.org/">Gatsby</a>,
      a static site generator build with React and GraphQL.
      <br />
      <br />
      {eventData.giveaway && <p>If you are at {eventData.name} and would like to enter to win, proceed to <Link to="/step-1">step 1</Link></p>}
    </small>
  </div>

export default IndexPage
