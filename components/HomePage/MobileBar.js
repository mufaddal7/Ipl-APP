import React from 'react';
import Link from 'next/link'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DrawerSlideBar from './DrawerSideBar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
      fontSize:'18px',
      fontWeight:'300',
      fontFamily:' "Lato", sans-serif',
      color:'#ffffff'
  },
  iiheaderhomelogo:{
height:'1.5rem',
width:'auto'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  offset: theme.mixins.toolbar,

}));

export default function MobileBar({home,header,categoryProduct,categoryService }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [state, setState] = React.useState({
    left: false,
  });
  let heading = 'InteriorsInfo';
  if(header && header != '' && header != null )
  {
    heading = header
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <>
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
    </>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          {!home && (
           <IconButton 
           edge="start"
           color="inherit"
           onClick={() => router.back()}
         >
           <ArrowBackIcon/>
         </IconButton>
        )}
        <Link href="/"><a>
          <IconButton
            edge="start"
            color="inherit"
          >
          <img alt="logo"
                  layout="responsive"
                  src={"/ii.png"}
                  className={classes.iiheaderhomelogo}></img>
                  </IconButton>
                  </a></Link>
          <Typography className={classes.title} variant="h6" component="h1" noWrap>
            {heading}
          </Typography>
          <div className={classes.grow} />
         <div className={classes.sectionMobile}>
           
    <IconButton edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <SearchIcon />
          </IconButton>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <SwipeableDrawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
            <DrawerSlideBar categoryProduct={categoryProduct} categoryService={categoryService} toggleDrawer={toggleDrawer} closeDrawer={() =>{setState('left',false)}}/>
          </SwipeableDrawer>
          <div className={classes.offset} />

    </div>
  );
}
