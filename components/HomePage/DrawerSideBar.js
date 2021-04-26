import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import AppsIcon from '@material-ui/icons/Apps';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import SingleBedSharpIcon from '@material-ui/icons/SingleBedSharp';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const StyledListItem = withStyles((theme) => ({
  root: {
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: theme.spacing(4)
  },
}))((props) => <ListItem {...props} />);

const StyledListItemAvatar = withStyles({
  root: {
    minWidth: 'fit-content',
    paddingRight: '8px'
  },
})((props) => <ListItemAvatar {...props} />);

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
  const toggleDrawer = (a, b) => {
    props.toggleDrawer(a, b)
  };
  const closeDrawer = () =>{
    props.closeDrawer()
  }
  const [openProducts, setOpenProducts] = React.useState(true);
  const [openServices, setOpenServices] = React.useState(false);
  const categoryService = props.categoryService
  const categoryProduct = props.categoryProduct
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
        <ListItem button >
          <ListItemIcon><AppsIcon /></ListItemIcon>
          <ListItemText primary='All Categories' />
        </ListItem>
        <ListItem button onClick={handleClickProductsMenu}>
          <ListItemIcon>
            <SingleBedSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
          {openProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categoryProduct.map((item, index) => (
              <Link href={"/"+toTitleCase(item.value).replace(/ /g, "-")}>
                <a onClick={()=>{closeDrawer()}} className={classes.anchor}>
                  <StyledListItem>
                    <StyledListItemAvatar>
                      <Avatar alt={item.value} src={"https://interiorsinfo.com/ImageBox/thumbnail/" + item.coverPhoto}>
                      </Avatar>
                    </StyledListItemAvatar>
                    <ListItemText primary={toTitleCase(item.value)} />
                  </StyledListItem>
                </a>
              </Link>
            ))}
          </List>
        </Collapse>

        <ListItem button onClick={handleClickServicesMenu}>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
          {openServices ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openServices} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categoryService.map((item, index) => (
              <Link href={"/"+toTitleCase(item.value).replace(/ /g, "-")}>
                <a onClick={()=>{closeDrawer()}} className={classes.anchor}>
                  <StyledListItem>
                    <StyledListItemAvatar>
                      <Avatar alt={item.value} src={"https://interiorsinfo.com/ImageBox/thumbnail/" + item.coverPhoto}>
                      </Avatar>
                    </StyledListItemAvatar>
                    <ListItemText primary={toTitleCase(item.value)} />
                  </StyledListItem>
                </a>
              </Link>
            ))}
          </List>
        </Collapse>


        <ListItem onClick={()=>{closeDrawer()}} button>
          <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
          <ListItemText primary='Services' />
        </ListItem>
        <ListItem onClick={()=>{closeDrawer()}} button>
          <ListItemIcon><WbIncandescentIcon /> </ListItemIcon>
          <ListItemText primary='Ideas' />
        </ListItem>
        </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}