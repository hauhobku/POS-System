import React, { useState } from 'react'
import { useStyles } from './updateEm.style.component'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateEmAction } from './../../reducer/employeeReducer';

function UpdateEmployee() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const employ = useSelector(state => state.Employees.emload);

    const [nem, setNem] = useState(
        {
            name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            salary: 0,
        }
    )

    const handleChange = (e) => {
        const { value, name } = e.target;
        setNem({...nem, [name]: value});
    }

    const handleUpdate = async () => {
        try {
            const result = axios.put(`http://localhost:3300/api/v1/food/update/${employ.id}`, nem);
            dispatch(updateEmAction(nem));
            alert("Cập nhật thành công!");
        }
        catch (error) {
            alert("Cập nhật không thành công!");
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div>
                    <p>SỬA THÔNG TIN NHÂN VIÊN</p>
                </div>
            </div>

            <div className={classes.boxmain}>
                <form action="" autoComplete="off">
                    <input onChange={handleChange} type="text" name="name" placeholder={employ.name}></input>
                    <input onChange={handleChange} type="email" name="email" placeholder={employ.email}></input>
                    <input onChange={handleChange} type="tel" name="phone" placeholder={employ.phone}></input>
                    <input onChange={handleChange} type="text" name="username" placeholder={employ.username}></input>
                    <input onChange={handleChange} type="password" name="password" placeholder={employ.password}></input>
                    <input onChange={handleChange} type="number" name="salary" placeholder={employ.salary}></input>
                    <div className={classes.btn}>
                    <Button onClick={handleUpdate}>
                        <AddIcon/> cập nhật
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateEmployee
