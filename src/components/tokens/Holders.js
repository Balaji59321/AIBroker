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
  const {holders} = tokenData;
  const {amount,variation} = holders;
  return (
    <div className={classes.colTitle}>
      <span className={classes.columnHeading}>Holders</span>
      <div>
        <h6 className='fontWeight500 margin0 pdTop2'>{amount.toLocaleString()}</h6>
        <div className={`fontSize9 ${parseInt(variation) > 0 ? "green" : "red"}`}>{variation}%</div>
      </div>
      {/* <ChartContainer
        width={150}
        height={150}
        className={classes.customChartContainer}
        series={[{ type: 'line', data: pData }]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          scale: 4.5,
          // marginLeft: "-40px",
          [`& .${lineElementClasses.root}`]: {
            stroke: '#308fe8',
            strokeWidth: 2,
          },
          [`& .${markElementClasses.root}`]: {
            stroke: '#308fe8',
            scale: '0.6',
            fill: '#fff',
            strokeWidth: 2,
          },
          [`& .${classes.customChartContainer}`]: {
            padding: 0,
            margin: 0,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
      </ChartContainer> */}
      <LineChart/>
    </div>
  )
}

export default Holders