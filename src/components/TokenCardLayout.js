import { Box } from '@mui/system';
import React from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import TokenInfo from './tokens/TokenInfo';
import MarketCap from './tokens/MarketCap';
import VolumeInfo from './tokens/VolumeInfo';
import CirculatingSupply from './tokens/CirculatingSupply';
import SocialInfo from './tokens/SocialInfo';
import Holders from './tokens/Holders';
import Sentiment from './tokens/Sentiment';
import classes from "./TokenCardLayout.module.css"
import Columns from '../mockApiData/Columns';

const TokenCardLayout = ({tokenData,isDarkTheme}) => {
  const selectedColumns = JSON.parse(localStorage.getItem('columns')) || Columns.map(ele => ele.id);
  return (
    <Box className={`${classes.cardLayout} ${isDarkTheme && "blackTheme"}`}>
      <div className={classes.startCol}>
        <GradeOutlinedIcon className={classes.darkBlue} fontSize='small' />
        <TextSnippetOutlinedIcon className={classes.darkBlue} fontSize='small'/>
      </div>
      {selectedColumns.includes(1) && <TokenInfo tokenData={tokenData}/>}
      {selectedColumns.includes(2) && <MarketCap tokenData={tokenData} />}
      {selectedColumns.includes(3) && <VolumeInfo tokenData={tokenData} />}
      {selectedColumns.includes(4) && <CirculatingSupply tokenData={tokenData}/>}
      {selectedColumns.includes(5) && <SocialInfo tokenData={tokenData} title={"Social Following"} />}
      {selectedColumns.includes(6) && <SocialInfo tokenData={tokenData} title={"Social Interactions"} />}
      {selectedColumns.includes(7) && <Holders tokenData={tokenData} />}
      {selectedColumns.includes(8) && <Sentiment tokenData={tokenData}/>}
    </Box>
  )
}

export default TokenCardLayout;