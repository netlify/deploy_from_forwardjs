import React from 'react'
import {CardButton, CardStyle} from '../styles/Card/index.js'
import {FlexCenter}  from '../styles/Grid'
import data from '../../data/tweets.json'

const Card = ({content}) =>
  <CardStyle>
    {`${content} ${data.hashtag}`}
    <a target='_blank' href={`https://twitter.com/intent/tweet?text=${content}%20`}><CardButton>Tweet</CardButton></a>
  </CardStyle>
;

const TwitterCards = () =>
  <FlexCenter>
    {data.tweets.map((tweet) => <Card key={tweet.id} content={tweet.content} />)}
  </FlexCenter>
;

export default TwitterCards;

