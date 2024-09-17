import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import "./../utils.css";
import classes from  "./NavBar.module.css";
import UserInfo from '../mockApiData/UserDetails';
import { FormControlLabel, styled, Switch } from '@mui/material';
import { MaterialUISwitch } from '../utils/utils';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WalletIcon from '@mui/icons-material/Wallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const NAVIGATION = [
  {
    title: 'Markets',
    segment: "",
    icon: <BarChartIcon />,
  },
  {
    segment: 'watchlist',
    title: 'WatchList',
    icon: <RemoveRedEyeIcon />,
  },
  {
    segment: 'training',
    title: 'AI Training Bots',
    icon: <SmartToyIcon />,
  },
  {
    segment: 'wallet',
    title: 'Wallet',
    icon: <WalletIcon />,
  },
  {
    segment: 'guides',
    title: 'Guides',
    icon: <LocalOfferIcon />,
  },
  {
    segment: 'community',
    title: 'Community',
    icon: <PeopleIcon />,
  },
  {
    segment: 'support',
    title: 'Support',
    icon: <FavoriteIcon />,
  }
];
const drawerWidth = 210;

function ResponsiveDrawer(props) {
  const {window} = props;
  const { darkTheme, setDarkTheme } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const UserDetails = UserInfo;
  const { name,balance,variation,currencyDen,profTier,verified } = UserDetails || {};

  const drawer = (
    <div>
      <div className={classes.pageLogo}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className={classes.logo}
        />
        <h1 className='fontSize20'>AI Broker</h1>
      </div>
      <div className={classes.profileCard}>
        <div className={classes.profilePic}>
          <img
            src="https://via.placeholder.com/100" // Replace with actual image URL
            alt="Profile"
          />
        </div>
        <h4 className='margin0'>{name}</h4>
        <div className={`flex jusCenter alignCenter ${classes.verified}`}>
          <span>Verified</span>
          {verified && <span className={classes.verifiedIcon}><CheckCircleOutlineOutlinedIcon/></span>}
          {!verified && <span className={classes.verifiedIcon}><CancelOutlinedIcon/></span>}
        </div>
      </div>
      <div className='mrTop10 fontWeight textCenter'>Total Balance</div>
      <div className={classes.balance}>
        {currencyDen}{balance.toLocaleString()}
        <span className={`fontSize10 ${variation > 0 ? "green" : "red"}`}> {variation}%</span>
      </div>
      <div className={classes.menuGap}>
        <List>
          {NAVIGATION.map((menu,idx) => (
            <ListItem key={menu.title} disablePadding className={selectedIndex === idx && classes.selected}>
              <ListItemButton className='grey flex gap10' onClick={() => {
                navigate(`/${menu.segment}`);
                setSelectedIndex(idx);
              }}>
                <span>{menu.icon}</span>
                <ListItemText primary={menu.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {!profTier && <div className={classes.professionalTier}>
          <div className='flexCol'>
            <span className='fontSize9'>UPGRADE TO</span>
            <h5 className='margin0 fontSize12'>Professional Tier</h5>
          </div>
          <MonetizationOnIcon fontSize='small'/>
        </div>}
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#fff',
          height: "50px",
          borderBottom: "0px solid #e0e0e0",
        }}
      >
        <div className={`flex spaceBtw alignCenter ${classes.padding10}`}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
          <h5 className='margin0 fontSize20 fontWeight500' style={{color: "#111"}}>
            Markets
          </h5>
          <div className='flex alignCenter gap15'>
            <SearchIcon fontSize='medium' className='grey'/>
            <EmailIcon fontSize='medium' className='grey'/>
            <NotificationsIcon fontSize='medium' className='grey'/>
            <span className='grey fontSize12'>EN/USD</span>
            <FormControlLabel
              control={<MaterialUISwitch checked={darkTheme} />}
              onChange={e => {
                setDarkTheme(prev => !prev);
              }}
              className={classes.padding0}
            />
            <LogoutIcon fontSize='medium' className='grey'/>
          </div>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
         <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box> */}
    </Box>
  );
}

export default ResponsiveDrawer;
