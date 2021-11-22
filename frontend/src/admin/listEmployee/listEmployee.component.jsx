import React, { useState } from 'react'
import { useStyles } from './listEm.style.component';
import { Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ItemEm from './../itemEm/itemEm.component';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { setValueAction } from './../../reducer/viewReduce';
import { setEmployeeView } from './../../reducer/employeeReducer';

function ListEmployee() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const viewCreateEm = () => {
        var value = {
            value: 5,
            active: 5
        };
        dispatch(setValueAction(value));
    };

    var search = '';

    const handleChangeSearch = (e) => {
        search = e.target.value;
        dispatch(setEmployeeView(search));
    }



    const employees = useSelector(state => state.Employees.employeesview);
    
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.leftheader}>
                    <p>DANH SÁCH NHÂN VIÊN</p>
                </div>
                <div className={classes.rightheader}>
                    <Button onClick={viewCreateEm}>
                        <AddIcon/> NEW
                    </Button>
                </div>
            </div>

            <div className={classes.boxmain}>
                <div className={classes.searchbox}>
                    <form action="" autoComplete="off">
                        <input onChange={handleChangeSearch} type='text' name='search' placeholder="Search employee..."></input>
                    </form>
                </div>

                <div className={classes.listcus}>
                    <div className={classes.head}>
                        <Grid className={classes.grid} spacing={2}>
                            <Grid className={classes.item} item xs={3}>
                                Name
                            </Grid>
                            <Grid className={classes.item} item xs={3}>
                                Email
                            </Grid>
                            <Grid className={classes.item} item xs={2}>
                                Phone
                            </Grid>
                            <Grid className={classes.item}item xs={2}>
                                Username
                            </Grid>
                            <Grid className={classes.item}item xs={2}>
                                Salary
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.listitem}>
                        {
                            employees.map((employee, index) => {
                                return (
                                    <ItemEm employee={employee} key={index}></ItemEm>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListEmployee
