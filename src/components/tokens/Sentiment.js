import React from 'react'
import { FearBorderLinearProgress } from '../../utils/utils';
import classes from "./Token.module.css"
import "./../../utils.css";

const Sentiment = ({tokenData}) => {
  const {sentiment,sentimentValue} = tokenData || {};
  return (
    <div className={classes.sentimentCol}>
      <div className={classes.columnHeading}>Sentiment</div>
      <span className={`textCenter fontWeight ${sentimentValue > 50 ? "green" : sentimentValue < 50 && "red"}`}>{sentiment}</span>
      <FearBorderLinearProgress variant="determinate" value={sentimentValue} />
      <span className='fontSize9 grey'>Based on data from May 17,2024 at 13:41</span>
    </div>
  )
}

export default Sentiment