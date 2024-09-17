import { Avatar } from '@mui/material';
import React from 'react';
import classes from "./Token.module.css";
import { BorderLinearProgress } from '../../utils/utils';
import "./../../utils.css";

const TokenInfo = ({tokenData}) => {
  const {name,details,currency} = tokenData;
  const {code,value,variationLevel,watchListCount,low,high} = details;
  
  return (
    <div className={`flexCol spaceBtw ${classes.columnWidth}`}>
      <div>
        <div className="flex spaceBtw alignCenter">
          <div className={classes.tokenName}>
            <Avatar className='mrRight10 iconWidth30'>N</Avatar>
            <div className='mrRight5'>{name}</div>
            <span className='fontSize9 grey'>{code}</span>
          </div>
          <div className='flex fontWeight'>
            <span>{currency}</span>
            <span>{value.toLocaleString()}</span>
          </div>
        </div>
        <div>
          <span className='greyTag fontSize9'>Rank #1</span>
          <span className='greyTag fontSize9'>Coin</span>
          <span className='greyTag fontSize9'>On {watchListCount.toLocaleString()} watchlists</span>
          <span className='greyTag fontSize9'>24h</span>
          <span className={`fontSize9 fontWeight ${parseInt(variationLevel) > 0 ? "green" : "red"}`}>{variationLevel}%</span>
        </div>
      </div>
      <div className='flex alignCenter'>
        <span className='grey fontSize9'>Low:<span className={classes.barRangeText}>{currency}{low.toLocaleString()}</span></span>
        <span className={classes.progressChart}><BorderLinearProgress variant="determinate" value={40} /></span>
        <span className='grey fontSize9'>High:<span className={classes.barRangeText}>{currency}{high.toLocaleString()}</span></span>
      </div>
    </div>
  )
}

export default TokenInfo