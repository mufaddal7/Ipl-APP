import React from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DrawerSlideBar from './DrawerSideBar'

const useStyles = makeStyles((theme) => ({

  header: {
    backgroundColor: '#000000'
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  iiheaderhomelogo: {
    height: '1.5rem',
    width: 'auto'
  },
  sectionDesktop: {
    display: 'flex',
  },
  sectionMobile: {
    display: 'flex',
    float: 'right',
    position: 'absolute',
    right: '15px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  offset: theme.mixins.toolbar,

}));

export default function MobileBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [state, setState] = React.useState({
    left: false,
  });

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
      <AppBar className={classes.header} position="fixed">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link href="/"><a>
            <IconButton
              edge="start"
              color="inherit"
            >
              <img alt="logo"
                layout="responsive"
                src={"/logo.png"}
                className={classes.iiheaderhomelogo}></img>
            </IconButton>
          </a></Link>
          <div className={classes.sectionMobile}>

            <IconButton edge="start"
              color="inherit"
              aria-label="open drawer"
            ><img alt="BodyWise" src={"/whatsapp.png"} />
            </IconButton>

            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <img alt="BodyWise" src={"/person.png"} />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <img alt="BodyWise" src={"/cart.png"} />
              </Badge>
            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <SwipeableDrawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
        <DrawerSlideBar toggleDrawer={toggleDrawer} closeDrawer={() => { setState('left', false) }} />
      </SwipeableDrawer>
      <div className={classes.offset} />

    </div>
  );
}
