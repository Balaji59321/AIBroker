import React from 'react'
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';
import classes from  "./Token.module.css";
import "./../../utils.css";
import LineChart from './Charts';

const pData = [2400, 1398, 4800, 3908, 4800, 3800, 4300, 4100];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
  'Page H',
];

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