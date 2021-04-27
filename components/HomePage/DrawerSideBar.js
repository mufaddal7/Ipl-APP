import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const StyledListItem = withStyles((theme) => ({
  root: {
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: theme.spacing(4)
  },
}))((props) => <ListItem {...props} />);


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  anchor:{
    color:theme.palette.primary.dark,
    '&:hover':{
      color:theme.palette.primary.main,
      textDecoration:'underline'
    }
  }
}));

export default function DrawerSlideBar(props) {
  const classes = useStyles();
  let anchor = 'left'
  const [openProducts, setOpenProducts] = React.useState(true);
  const [openServices, setOpenServices] = React.useState(false);

  const toggleDrawer = (a, b) => {
    props.toggleDrawer(a, b)
  };
  const closeDrawer = () =>{
    props.closeDrawer()
  }
  const handleClickProductsMenu = () => {
    setOpenProducts(!openProducts);
  };
  const handleClickServicesMenu = () => {
    setOpenServices(!openServices);
  };

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem >
          <ListItemText  primary='Shop' />
        </ListItem>
        <ListItem button onClick={handleClickProductsMenu}>
          <ListItemText primary="Choose Concers" />
          {openProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
                <a onClick={()=>{closeDrawer()}} className={classes.anchor}>
                  <StyledListItem>
                    <ListItemText primary={'Hair'} />
                  </StyledListItem>
                </a>
                <a onClick={()=>{closeDrawer()}} className={classes.anchor}>
                  <StyledListItem>
                    <ListItemText primary={'Skin'} />
                  </StyledListItem>
                </a>
                <a onClick={()=>{closeDrawer()}} className={classes.anchor}>
                  <StyledListItem>
                    <ListItemText primary={'Weight'} />
                  </StyledListItem>
                </a>
                <a onClick={()=>{closeDrawer()}} className={classes.anchor}>
                  <StyledListItem>
                    <ListItemText primary={'Obesity'} />
                  </StyledListItem>
                </a>
          </List>
        </Collapse>

        <ListItem onClick={()=>{closeDrawer()}} button>
          <ListItemText primary='All Products' />
        </ListItem>
        <ListItem onClick={()=>{closeDrawer()}} button>
          <ListItemText primary='Book Consultation' />
        </ListItem>
        </List>
      <Divider />
      <List>
        {['About Us', 'Contact Us', 'Login'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}