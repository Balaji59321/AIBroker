import React from 'react'
import classes from  "./Token.module.css";
import "./../../utils.css";
import LineChart from './Charts';

const Holders = ({tokenData}) => {
  const {holders,statistics} = tokenData;
  const {amount,variation} = holders;
  return (
    <div className={classes.colTitle}>
      <span className={classes.columnHeading}>Holders</span>
      <div>
        <h6 className='fontWeight margin0'>{amount.toLocaleString()}</h6>
        <div className={`fontSize9 ${parseInt(variation) > 0 ? "green" : "red"}`}>{variation}%</div>
      </div>
      <LineChart chartData={statistics}/>
    </div>
  )
}

export default Holders;