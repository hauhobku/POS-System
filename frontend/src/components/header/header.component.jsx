/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { useStyles } from './header.style.component'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from './../../assets/images/logo-dark.png'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Stack, Badge  } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

function LoginComponent() {
    return (
        <Stack spacing={2} direction="row">
            
            <Link to="/">
                <Button>
                    <HomeIcon/>
                </Button>
            </Link>   
            
            <Badge badgeContent={4} color="success">
                <Link to="/user">
                    <Button>
                        <PersonIcon/>
                    </Button>
                </Link>
            </Badge>
            <Badge badgeContent={4} color="success">
                <Link to="/menu">
                    <Button>
                        <ShoppingCartIcon/>
                    </Button>
                </Link>
            </Badge>
        </Stack>
    )
}

function LoginButton(props) {
    const classes = useStyles();
    return (
        <div className={classes.ButtonLogin}>
            <Link to="/login">
                <Button onClick={() => props.setLogin(true)}>SIGN IN</Button>
            </Link>
        </div>
    )
}

function Header() {
    const [login, setLogin] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.flexbox}>
                    <div className={classes.logo}>
                        <Link to="/">
                            <img src={Logo} href="Logo" />
                        </Link>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.wrap}>
                            <div className={classes.left}>
                                Search All Categories
                            </div>
                            <div className={classes.mid}>
                                <form action="/" autocomplete="off">
                                    <input className={classes.input} type="text" name="search" id="search" placeholder="I'm looking for..."></input>
                                    <div className={classes.buttonfield}>
                                        <Button size="large" type="submit">
                                            <SearchIcon/>
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={classes.user}>
                        {login ? <LoginComponent/> : <LoginButton setLogin={setLogin}/>}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header;
