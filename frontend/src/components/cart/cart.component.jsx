import React from 'react'
import { useStyles } from './cart.style.component'
import CartItem from '../cartitem/cartitem.component';
import { Button }  from '@mui/material'

function Cart() {
    const classes = useStyles();
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
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className={classes.footer}>
                    <div className={classes.box}>
                        <div className={classes.total}>
                            <div>total payment</div>
                            <p>200.000 vnd</p>
                        </div>
                        <div className={classes.pay}>
                            <Button>
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
