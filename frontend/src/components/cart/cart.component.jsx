import React from 'react'
import { useStyles } from './cart.style.component'
import CartItem from '../cartitem/cartitem.component';
import { Button }  from '@mui/material'

import { useSelector, useDispatch } from 'react-redux';
import { clearAction } from './../../reducer/menuReduce';

function Cart() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const Cart = useSelector(state => state.Cart);
    const payment = () => {
        alert("Thanh toán thành công " + Cart.total + " VND");
        dispatch(clearAction());
    }

    return (
        <div className={classes.root}>
            <div className={classes.flexbox}>
                <div className={classes.header}>
                    <p>Your Cart</p>
                </div>
                <div className={classes.thead}>
                    <div className={classes.d1}>PRODUCT</div>
                    <div className={classes.d2}>PRICE</div>
                    <div className={classes.d3}>QUANTITY</div>
                </div>
                <div className={classes.listPro}>
                    {
                        Cart.foods.map((item, index) => {
                            return (
                                <CartItem item={item} key={index}></CartItem>
                            )
                        }, '')
                    }
                </div>
                <div className={classes.footer}>
                    <div className={classes.box}>
                        <div className={classes.total}>
                            <div>total payment</div>
                            <p>{Cart.total} vnd</p>
                        </div>
                        <div className={classes.pay}>
                            <Button onClick={payment}>
                                Payment orders
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
