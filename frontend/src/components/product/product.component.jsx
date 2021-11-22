import React from 'react'
import { useStyles } from './product.style.component'
import { Button } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux';
import { addfoodAction } from './../../reducer/menuReduce';
import { Link } from 'react-router-dom';

function Product(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const food = props.food;

    const addToCart = () => {
        const item = {
            foodInfo: food,
            quantity: 1,
        }
        dispatch(addfoodAction(item));
    }

    const Foods = useSelector(state => state.Cart.foods);

    const renderButton = () => {
        let check = false;
        for (let i = 0; i < Foods.length; i++)
        {
            if (Foods[i].foodInfo.id === food.id)
            {
                check = true;
            }
        }

        if (check) {
            return (
                <Link to="/menu">
                    <Button>View on cart</Button>
                </Link>
            )
        }
        else {
            return (<Button onClick={addToCart}>Add to cart</Button>)
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.flexbox}>
                <div className={classes.picbox}>
                    <div className={classes.pic}>
                        <img src={food.img} alt="pic"></img>
                    </div>
                </div>
                <div className={classes.infor}>
                    <div className={classes.name}>{food.name}</div>
                    <br/>
                    <div className={classes.price}>{food.price} vnd</div>
                    <div className={classes.button}>
                        {renderButton()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
