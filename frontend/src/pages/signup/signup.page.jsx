import React, { useState } from 'react';
import { useStyles } from './signup.styles.page'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import axios from "axios"

function SignUp() {
    const classes = useStyles();

    const [customer, setCustomer] = useState(
        {
            email: '',
            name: '',
            phone: '',
            username: '',
            password: '',
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({...customer, [name]: value});
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Đăng ký');
        try {
            const result = await axios.post("http://localhost:3300/api/v1/customer/register", customer);
            alert(result.data);
        }
        catch (error) {
            alert("Đăng ký không thành công!");
        }
    }

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
                            <form action="" autoComplete="off">
                                <input
                                    onChange={handleChange}
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="email"
                                >
                                </input>
                                <input
                                    onChange={handleChange}
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    placeholder="username"
                                >
                                </input>
                                <input
                                    onChange={handleChange} 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="password"
                                >
                                </input>
                                <Button onClick={handleRegister} type="submit">
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

export default SignUp;
