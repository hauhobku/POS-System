import { Button } from '@mui/material';
import React from 'react'
import { useStyles } from './cartitem.style.component'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useDispatch } from 'react-redux';
import { addfoodAction, reducefoodAction, deletefoodAction } from "./../../reducer/menuReduce"

function CartItem(props) {
    const classes = useStyles();
    const item = props.item;
    const dispatch = useDispatch();
    
    const increaseItem = () => {
        dispatch(addfoodAction(item));
    }

    const reduceItem = () => {
        dispatch(reducefoodAction(item));
    }

    const deleteItem = () => {
        dispatch(deletefoodAction(item));
    }

    const getPrice = () => {
        return String(item.foodInfo.price * item.quantity);
    }

    return (
        <div className={classes.root}>
            <div className={classes.flexbox}>
                <div className={classes.pic}>
                    <Link to="/menu">
                        <img src={item.foodInfo.img} alt=""/>
                    </Link>
                </div>
                <div className={classes.name}>
                    <p>{item.foodInfo.name}</p>
                </div>
                <div className={classes.price}>
                    <p>{getPrice()}</p>
                </div>
                <div className={classes.quantity}>
                    <Button onClick={reduceItem}>
                        <RemoveIcon/>
                    </Button>
                    <p>{String(item.quantity)}</p>
                    <Button onClick={increaseItem}>
                        <AddIcon/>
                    </Button>
                </div>
                <div className={classes.del}>
                    <Button onClick={deleteItem}>
                        <DeleteIcon/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
