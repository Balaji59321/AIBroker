import React from 'react';
import { BorderLinearProgress } from '../../utils/utils';
import "./../../utils.css";
import classes from "./Token.module.css";


const CirculatingSupply = ({tokenData}) => {
  const {ciruculatingSupply, details} = tokenData || {};
  const {code} = details  || {}
  const {value,variationLevel,currencyDen,maxSupply,maxSupplyDen,totalSupply,totalSupplyDen} = ciruculatingSupply;
  return (
    <div className={classes.cirColWidth}>
      <span className={classes.columnHeading}>Circulating Supply</span>
      <div className={classes.circVal}>
        <div>
          <div className='flex spaceBtw alignCenter'>
            <h6 className='margin0 fontWeight'>{value}{currencyDen} {code}</h6>
            <span className='grey fontSize12'>{variationLevel}</span>
          </div>
          <BorderLinearProgress variant="determinate" value={90} className='mgTop5'/>
        </div>
        <span>
          <h4 className={classes.footerHead}>Max Supply: <span className={classes.footerHeadVal}>{maxSupply}{maxSupplyDen}</span></h4>
          <h4 className={classes.footerHead}>Total Supply: <span className={classes.footerHeadVal}>{totalSupply}{totalSupplyDen}</span></h4>
        </span>
      </div>
    </div>
  )
}

export default CirculatingSupply