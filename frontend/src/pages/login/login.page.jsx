import React, { useState } from 'react';
import { useStyles } from './login.style.page'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { loginAction } from './../../reducer/accountReducer';

function Login() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [login, setLogin] = useState(
        {
            email: "",
            password: ""
        }
    );

    const handleChangeLogin = (e) => {
        const { name, value} = e.target;
        setLogin({...login, [name]: value});
    }

    const handleLogin = async (e) => {
        try {
            const result = await axios.post('http://localhost:3300/api/v1/customer/login', login);
            if (result.data) {
                alert("Đăng nhập thành công!");
                localStorage.setItem('account', JSON.stringify(result.data));
                dispatch(loginAction(result.data.customer));
                history.push("/");
            }
        }
        catch (error) {
            alert("Đăng nhập thất bại!");
        }
    }

    return (
        <div className={classes.root}>
            <div style={{height: '100px'}}></div>

            <div className={classes.flexbox}>
                <div className={classes.formBox}>
                    <div className={classes.box}>
                        <div className={classes.title}>
                            Sign In
                        </div>
                        <div className={classes.form}>
                            <form action="" autoComplete="off">
                                <input
                                    onChange={handleChangeLogin}
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="email"
                                ></input>
                                <input
                                    onChange={handleChangeLogin} 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="password"
                                ></input>
                                <Button onClick={handleLogin} type="button">
                                    Sign In
                                </Button>
                            </form>
                        </div>
                        <div className={classes.signup}>
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
