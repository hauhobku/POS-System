import React, { useState } from 'react'
import { useStyles } from './loginadmin.style.component'
import { Button } from '@mui/material'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginAdmin() {
    const classes = useStyles();
    const history = useHistory();

    const [account, setAccount] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value} = e.target;
        setAccount({...account, [name]: value});
    }

    const handleLogin = async (e) => {
        try {
            const result = await axios.post("http://localhost:3300/api/v1/admin/login", account);
            localStorage.setItem("admin", JSON.stringify(result.data));
            alert("Đăng nhập thành công!");
            history.replace('/admin');
        }
        catch (error) {
            alert("Đăng nhập không thành công!");
        }
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.boxform}>
                <h3>ĐĂNG NHẬP</h3>
                <form action="" autoComplete="off">
                    <input onChange={handleChange} type="email" name="email" placeholder="Email"></input>
                    <input onChange={handleChange} type="password" name="password" placeholder="Password"></input>
                    <div className={classes.btn}>
                    <Button onClick={handleLogin}>
                        Đăng nhập
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin
