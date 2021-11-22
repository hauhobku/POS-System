import React, { useState, useEffect} from "react";
import { useStyles } from "./productlist.style.component";
import { Container, Grid } from "@mui/material";
import Product from "./../product/product.component";
import titleBottom from "./../../assets/images/title-bottom.png";

import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { getCustomerViewAction } from './../../reducer/viewFoodReducer';


function Productlist(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const foods = useSelector(state => state.ViewFood.viewfood);

    const getFoodsList = async (e) => {
        try {
            const result = await axios.get("http://localhost:3300/api/v1/food/list");
            dispatch(getCustomerViewAction(result.data));
        }   
        catch (error) {}
    }

    useEffect(() => getFoodsList(), []);

    return (
        <div className={classes.root} id="menu">
        <Container>
            <div className={classes.flexbox} style={{width: `${(props.num === 4) ? "75%" : "100%"}`}}>
                <div className={classes.title}>
                    <p>{props.name}</p>
                    <img src={titleBottom} alt="title"></img>
                </div>
                <Grid container spacing={2}>
                    {
                        foods.map((food, index) => {
                            return (
                                <Grid key={index} item xs={props.num}>
                                    <Product food={food}/>
                                </Grid>
                            )
                        }, '')
                    }
                </Grid>
                {/* <div className={classes.pagi}>
                    <Stack spacing={1}>
                    <Pagination count={10} variant="outlined" color="success" />
                    </Stack>
                </div> */}
            </div>
            <div className={classes.cart}>
                
            </div>
        </Container>
        </div>
    );
}

export default Productlist;
