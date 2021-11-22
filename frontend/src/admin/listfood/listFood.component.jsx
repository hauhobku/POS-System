import React, { useState, useEffect } from 'react'
import { useStyles } from './listFood.style.component';
import { Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ItemFood from './../itemfood/itemfood.component';

import { useDispatch, useSelector } from 'react-redux';
import { setValueAction } from './../../reducer/viewReduce';
import { setFoodView } from './../../reducer/foodsReducer';


function ListFood() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const foods = useSelector(state => state.Foods.foodsview);

    const viewCreateFood = () => {
        var value = {
            value: 2,
            active: 2
        };
        dispatch(setValueAction(value));
    }

    var search = '';

    const handleChangeSearch = (e) => {
        search = e.target.value;
        dispatch(setFoodView(search));
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.leftheader}>
                    <p>DANH SÁCH MÓN ĂN</p>
                </div>
                <div className={classes.rightheader}>
                    <Button onClick={viewCreateFood}>
                        <AddIcon/> NEW
                    </Button>
                </div>
            </div>

            <div className={classes.boxmain}>
                <div className={classes.searchbox}>
                    <form action="" autoComplete="off">
                        <input onChange={handleChangeSearch} type='text' name='search' placeholder="Search food..."></input>
                    </form>
                </div>

                <div className={classes.listcus}>
                    <div className={classes.head}>
                        <Grid className={classes.grid} spacing={2}>
                            <Grid className={classes.item} item xs={1}>
                                ID
                            </Grid>
                            <Grid className={classes.item} item xs={2}>
                                Image
                            </Grid>
                            <Grid className={classes.item} item xs={5}>
                                Name
                            </Grid>
                            <Grid className={classes.item}item xs={4}>
                                Price
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.listitem}>
                        {
                            foods.map((food, index) => {
                                return (
                                    <ItemFood food={food} key={index}></ItemFood>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListFood
