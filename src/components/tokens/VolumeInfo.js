import React from 'react';
import "./../../utils.css";
import classes from  "./Token.module.css"

const VolumeInfo = ({tokenData}) => {
  const {volume, currency} = tokenData || {};
  const {value, variationLevel, decentralizedVol, decentralizedVolDen, centralizedVol, centralizedVolDen, currencyDen} = volume || {};
  return (
    <div className={classes.cirColWidth}>
      <span className={classes.columnHeading}>Volume</span>
      <div className='flexCol spaceBtw gap15'>
        <div className='flexCol'>
          <span className='fontWeight'>{currency}{value}{currencyDen}</span>
          <div>
            <span className='greyTag'>24h</span>
            <span className={`fontSize9 fontWeight ${parseInt(variationLevel) > 0 ? "green" : "red"}`}>{variationLevel}%</span>
          </div>
        </div>
        <span>
          <h4 className={classes.footerHead}>CEX Vol: <span className={classes.footerHeadVal}>{currency}{centralizedVol}{centralizedVolDen}</span></h4>
          <h4 className={classes.footerHead}>DEX Vol: <span className={classes.footerHeadVal}>{currency}{decentralizedVol}{decentralizedVolDen}</span></h4>
        </span>
      </div>
    </div>
  )
}

export default VolumeInfo;