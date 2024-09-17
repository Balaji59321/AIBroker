import React from 'react';
import { Box, Button } from '@mui/material'
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import "./../utils.css";
import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <Box className={classes.container}>
        <div className='flex spaceBtw alignCenter'>
            <div className='flexCol gap5'>
                <h1 className='margin0'>Sign Up to All Broker AI Tiers and enjoy all the perks</h1>
                <span>
                    <p className='fontSize10 margin0'>Unlock exclusive access to premium content,personalised insights, and unique perks by subscribing</p>
                    <p className='fontSize10 margin0'>to AI Broker tiers now !</p>
                </span>
            </div>
            <Button variant='contained' className={`flex gap5 ${classes.btnText}`}>
                <span className='textCaptialise fontSize12'>Sign Up Now</span>
                <LaunchRoundedIcon fontSize='small' className={classes.btnIcon}/>
            </Button>
        </div>
    </Box>
  )
}

export default SignUp;