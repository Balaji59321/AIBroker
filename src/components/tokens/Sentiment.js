import React from 'react'
import { FearBorderLinearProgress } from '../../utils/utils';
import classes from "./Token.module.css"
import "./../../utils.css";

const Sentiment = ({tokenData}) => {
  const {sentiment} = tokenData;
  return (
    <div className={classes.sentimentCol}>
      <div className={classes.columnHeading}>Sentiment</div>
      <span className='textCenter'>{sentiment}</span>
      <FearBorderLinearProgress variant="determinate" value={20} />
      <span className='fontSize9 grey'>Based on data from May 17,2024 at 13:41</span>
    </div>
  )
}

export default Sentiment