import React from 'react'
import { useStyles } from './header.style.component';
import Logo from './../../assets/images/logo-dark.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link to="/">
                <img src={Logo} alt=""></img>
            </Link>
            
        </div>
    )
}

export default Header
