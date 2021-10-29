import React from 'react'
import { useStyles } from './banner.style.component';
import { Container } from '@mui/material'
import Logo from './../../assets/images/logo-light.png';
import { Button } from '@mui/material';

function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.flexbox}>
                    <div className={classes.content}>
                        <img src={Logo} alt="logo"></img>
                        <p>POS SYSTEM OF</p>
                        <h1>NUVO RESTAURANT</h1>
                        <a href="#menu" style={{textDecoration: 'none'}}>
                            <Button>M E N U</Button>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
