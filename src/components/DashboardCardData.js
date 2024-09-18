import React from 'react';
import { SocialIcon } from 'react-social-icons';
import classes from  "./TopWidgets.module.css"
import "./../utils.css";

const DashboardCardData = ({data,subKey}) => {  
  const {variation} = data;
  return (
        <div className='flex spaceBtw' style={{height: "35px"}}>
            <div className='flex alignCenterStart gap10'>
                <SocialIcon url={data.icon} fgColor="#fff" className={classes.iconWidth25} />
                <div className='flexCol'>
                    <div className='mrRight5 fontSize10'>{data.name}</div>
                    <span className='fontSize9 grey'>{data.code}</span>
                </div>
            </div>
            <div className='flexCol alignEnd'>
                <span className='fontSize9'>{data[subKey]}</span>
                <div className='flex'>
                    <span className='greyTag fontSize9'>24h</span>
                    <span className={`fontSize9 fontWeight ${parseInt(variation) > 0 ? "green" : "red"}`}>{data.variation}%</span>
                </div>
            </div>
        </div>
  )
}

export default DashboardCardData