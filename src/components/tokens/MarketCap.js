import React from 'react';
import "./../../utils.css";
import classes from  "./Token.module.css"

const MarketCap = ({tokenData}) => {
  const {marketCap, currency} = tokenData || {};
  const {currMarket, last24HrTrend} = marketCap || {};
  const {Cap,currencyDen:CapCurrency,variationLevel} = currMarket || {};
  const {volume,currencyDen:volumeCurrency} = last24HrTrend || {};
  return (
    <div className={classes.colTitle}>
      <span className={classes.columnHeading}>MarketCap</span>
      <div className='flexCol spaceBtw gap15'>
        <div className='flexCol'>
          <span className='fontWeight'>{currency}{Cap}{CapCurrency}</span>
          <div>
            <span className='greyTag'>24h</span>
            <span className={`fontSize9 fontWeight ${parseInt(variationLevel) > 0 ? "green" : "red"}`}>{variationLevel}%</span>
          </div>
        </div>
        <h4 className={classes.footerHead}>24H Volume/Market Cap: <span className={classes.footerHeadVal}>{currency}{volume}{volumeCurrency}</span></h4>
      </div>
    </div>
  )
}

export default MarketCap;