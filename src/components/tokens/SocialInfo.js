import React from 'react';
import { SocialIcon } from 'react-social-icons';
import classes from "./Token.module.css";
import "./../../utils.css";

const SocialInfo = ({tokenData, title}) => {
  const {social} = tokenData || {};
  const {following} = social || {};
  const {discord,discordVariation,twitter,twitterVariation} = following || {};
  return (
    <div className={classes.socialInfo}>
      <span className={classes.columnHeading}>{title}</span>
      <div className='flex gap10 spaceBtw'>
        <div className='flexCol'>
          <SocialIcon network="discord" fgColor="#fff" className='iconWidth25'/>
          <div className="flexCol mrTop10">
            <span className='fontWeight500 mrBottom5'>{discord}</span>
            <span className={`fontSize9 fontWeight ${twitterVariation > 0 ? "green" : "red"}`}>{discordVariation}%</span>
          </div>
        </div>
        <div className='flexCol'>
          <SocialIcon network="twitter" fgColor="#fff" className='iconWidth25'/>
          <div className="flexCol mrTop10">
            <span className='fontWeight500 mrBottom5'>{twitter}</span>
            <span className={`fontSize9 fontWeight ${twitterVariation > 0 ? "green" : "red"}`}>{twitterVariation}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialInfo