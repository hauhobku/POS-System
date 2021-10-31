import { Button } from '@mui/material';
import React from 'react'
import { useStyles } from './cartitem.style.component'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from '@mui/material';
import pic from './../../assets/images/coffee.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartItem() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.flexbox}>
                <div className={classes.pic}>
                    <Link to="/menu">
                        <img src={pic} alt=""/>
                    </Link>
                </div>
                <div className={classes.name}>
                    <p>Capuccino</p>
                </div>
                <div className={classes.price}>
                    <p>20.000 vnd</p>
                </div>
                <div className={classes.quantity}>
                    <Button>
                        <RemoveIcon/>
                    </Button>
                    <p>10</p>
                    <Button>
                        <AddIcon/>
                    </Button>
                </div>
                <div className={classes.del}>
                    <Button>
                        <DeleteIcon/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
