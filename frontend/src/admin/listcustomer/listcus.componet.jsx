import React, { useState, useEffect } from 'react'
import { useStyles } from './listcus.style.component';
import { Grid } from '@mui/material';

import Item from '../item/item.component';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomerView } from './../../reducer/customerReducer';

function ListCustomer() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const customers = useSelector(state => state.Customers.customersview);
    
    var search = '';

    const handleChangeSearch = (e) => {
        search = e.target.value;
        dispatch(setCustomerView(search));
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.leftheader}>
                    <p>DANH SÁCH KHÁCH HÀNG</p>
                </div>
            </div>

            <div className={classes.boxmain}>
                <div className={classes.searchbox}>
                    <form action="" autoComplete="off">
                        <input onChange={handleChangeSearch} type='text' name='search' placeholder="Search user..."></input>
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
                            <Grid className={classes.item} item xs={3}>
                                Phone
                            </Grid>
                            <Grid className={classes.item}item xs={3}>
                                Username
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.listitem}>
                        {
                            customers.map((user, index) => {
                                return (
                                    <Item user={user} key={index}></Item>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCustomer
