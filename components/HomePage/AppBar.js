import Head from 'next/head'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect, useState } from 'react';
import MobileBar from './MobileBar'
import styles from './AppBar.module.css'

const useStyles = makeStyles((theme) => ({
    
    logo: {
        
        height: '24px',
        display: 'inline-Block',
        margin: 'auto'
    },
    menu: {
        margin: 0,
        padding: 0,
        display: 'inline-block',
    },
    menuLi: {
        margin: '0',
        padding: '0',
        float: 'left',
        listStyle: 'none'
    },
    menuButtons: {
        fontFamily: 'lato, sans-serif',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#fff',
        margin: '0 8px',
        textAlign: 'center',
        display: 'inline-Block',
        textDecoration: 'none',
        padding: '10px 3px',
        display: 'block',
        textAlign: 'center',
    },
    menuButtonsLast: {
        fontFamily: 'lato, sans-serif',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#fff',
        margin: '0 8px',
        textAlign: 'center',
        display: 'inline-Block',
        textDecoration: 'none',
        padding: '10px 3px',
        display: 'block',
        textAlign: 'center',
        marginRight:'30px',
    },
    logoDiv: {
        height: '100%'
    },
    apoheader: {
        display: 'inline-flex',
        margin:'auto',

    }
}))

export default function Layout({ children, home, header, getCategory, getLoggedIn }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box>
                <header className={styles.apheader}>

                    <div className={classes.apoheader}>
                        <ul className={classes.menu}>
                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#"> <img alt="BodyWise"
                                layout="responsive"
                                src={"/logo.png"}
                                className={classes.logo}></img></a></li>

                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#">Shop</a></li>
                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#">Take Self - Assessment</a></li>
                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#">Choose Concers</a></li>
                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#">All Products</a></li>
                            <li className={classes.menuLi}><a className={classes.menuButtonsLast} href="#">Book Consultation</a></li>
                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#"><img alt="BodyWise" src={"/search.png"} /></a></li>
                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#"><img alt="BodyWise" src={"/whatsapp.png"} /></a></li>
                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#"><img alt="BodyWise" src={"/profile.png"} /></a></li>
                            <li className={classes.menuLi}><a className={classes.menuButtons} href="#"><img alt="BodyWise" src={"/cart.png"} /></a></li>
                        </ul>
                    </div>
                </header>
            </Box>
            <Box display={{ sm: "block", md: "none" }}>
        <MobileBar  header={header} home={home} />
      </Box> 
        </>
    )
}
