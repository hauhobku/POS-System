import React, { useState } from 'react'
import { useStyles } from './createEm.styles.component'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addEmAction } from './../../reducer/employeeReducer'

function CreateEm() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [employ, setEmploy] = useState(
        {
            name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            salary: 0,
        }
    );

    const handleChange = (e) => {
        const { value, name } = e.target;
        setEmploy({...employ, [name]: value});
    }

    const handleAdd = async () => {
        try {
            const result = axios.post("http://localhost:3300/api/v1/employee/add", employ);
            dispatch(addEmAction(employ));
            alert("Thêm thành công!");
        }
        catch (error) {
            alert("Thêm không thành công!");
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div>
                    <p>THÊM NHÂN VIÊN</p>
                </div>
            </div>

            <div className={classes.boxmain}>
                <form action="" autoComplete="off">
                    <input onChange={handleChange} type="text" name="name" placeholder="Tên nhân viên"></input>
                    <input onChange={handleChange} type="email" name="email" placeholder="Email"></input>
                    <input onChange={handleChange} type="tel" name="phone" placeholder="Phone"></input>
                    <input onChange={handleChange} type="text" name="username" placeholder="Username"></input>
                    <input onChange={handleChange} type="password" name="password" placeholder="Password"></input>
                    <input onChange={handleChange} type="number" name="salary" placeholder="Lương"></input>
                    <div className={classes.btn}>
                    <Button onClick={handleAdd} type="submit">
                        <AddIcon/> Thêm
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateEm
