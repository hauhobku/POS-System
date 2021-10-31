import React from 'react';
import { useStyles } from './signup.styles.page'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

function Login() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{height: '100px'}}></div>

            <div className={classes.flexbox}>
                <div className={classes.formBox}>
                    <div className={classes.box}>
                        <div className={classes.title}>
                            Sign Up
                        </div>
                        <div className={classes.form}>
                            <form action="" autocomplete="off">
                                <input type="email" name="email" id="gmail" placeholder="email"></input>
                                <input type="text" name="username" id="name" placeholder="username"></input>
                                <input type="password" name="password" id="password" placeholder="password"></input>
                                <Button type="submit">
                                    Sign Up
                                </Button>
                            </form>
                        </div>
                        <div className={classes.signup}>
                            <Link to="/login">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
