/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
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
import { useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';

import { logoutAction } from './../../reducer/accountReducer';
import { useDispatch } from 'react-redux';

import { setviewfood } from './../../reducer/viewFoodReducer';

function LoginComponent() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutAction());
    }

    const Cart = useSelector(state => state.Cart);

    return (
        <Stack spacing={2} direction="row">
            
            <Link to="/">
                <Button>
                    <HomeIcon/>
                </Button>
            </Link>   
            
            <Link to="/user">
                <Button>
                    <PersonIcon/>
                </Button>
            </Link>

            <Badge badgeContent={Cart.foods.length} color="success">
                <Link to="/menu">
                    <Button>
                        <ShoppingCartIcon/>
                    </Button>
                </Link>
            </Badge>

            <Link to="/">
                <Button onClick={handleLogout}>
                    <LogoutIcon/>
                </Button>
            </Link>
        </Stack>
    )
}

function LoginButton() {
    const classes = useStyles();
    return (
        <div className={classes.ButtonLogin}>
            <Link to="/login">
                <Button>SIGN IN</Button>
            </Link>
        </div>
    )
}

function Header() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const acc = useSelector(state => state.Account.acc);

    var search = '';

    const handleChangeSearch = (e) => {
        search = e.target.value;
        dispatch(setviewfood(search));
    }

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
                                <form action="" autoComplete="off">
                                    <input onChange={handleChangeSearch} className={classes.input} type="text" name="search" id="search" placeholder="I'm looking for..."></input>
                                    <div className={classes.buttonfield}>
                                        <Button size="large">
                                            <SearchIcon/>
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={classes.user}>
                        {(acc.email === "") ? <LoginButton/> : <LoginComponent/>}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header;
