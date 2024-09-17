import React from 'react';
import dashboardData from './../mockApiData/Markets';
import DashboardCardData from './DashboardCardData';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import classes from "./TopWidgets.module.css";
import "./../utils.css";

const TopWidgets = ({title, keys, subKey, isDarkTheme}) => {
  return (
    <div className={`${classes.cardWhite} ${isDarkTheme && "blackTheme"}`}>
      <div className={classes.heading}>
        <OfflineBoltRoundedIcon className={classes.wigetIcon} />
        <h1 className={classes.title}>{title}</h1>
      </div>
      <div className={classes.subHeading}>
        <h5 className='fontSize9 grey margin0'>TOKEN</h5>
        <h5 className='fontSize9 grey margin0'>{subKey.toUpperCase()}</h5>
      </div>
      <div className={`flexCol ${classes.widgetGap}`}>
        {dashboardData[keys].map((data,idx) => (<DashboardCardData key={idx} data={data} subKey={subKey} />))}
      </div>  
    </div>
  )
}

export default TopWidgets