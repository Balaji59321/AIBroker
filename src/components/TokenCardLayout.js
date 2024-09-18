import React from 'react'
import { Box } from '@mui/system';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import TokenInfo from './tokens/TokenInfo';
import MarketCap from './tokens/MarketCap';
import VolumeInfo from './tokens/VolumeInfo';
import CirculatingSupply from './tokens/CirculatingSupply';
import SocialInfo from './tokens/SocialInfo';
import Holders from './tokens/Holders';
import Sentiment from './tokens/Sentiment';
import Columns from '../mockApiData/Columns';
import classes from "./TokenCardLayout.module.css"

const TokenCardLayout = ({tokenData,isDarkTheme}) => {
  const selectedColumns = JSON.parse(localStorage.getItem('columns')) || Columns.map(ele => ele.id);
  const componentMap = {
    1: TokenInfo,
    2: MarketCap,
    3: VolumeInfo,
    4: CirculatingSupply,
    5: (props) => <SocialInfo {...props} title="Social Following" />,
    6: (props) => <SocialInfo {...props} title="Social Interactions" />,
    7: Holders,
    8: Sentiment,
  };
  
  return (
      <Box className={`${classes.cardLayout} ${isDarkTheme && "blackTheme"}`}>
        <div className={classes.startCol}>
          <GradeOutlinedIcon className={classes.darkBlue} fontSize='small' />
          <TextSnippetOutlinedIcon className={classes.darkBlue} fontSize='small'/>
        </div>
        {selectedColumns.sort().map((column) => {
          const Component = componentMap[column];
          return Component ? <Component key={column} tokenData={tokenData} /> : null;
        })}
      </Box>
    );
  };

export default TokenCardLayout;