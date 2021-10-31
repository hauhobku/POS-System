import React from 'react'
import { useStyles } from './product.style.component'
import cappuccino from './../../assets/images/coffee.png'
import { Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

function Product() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.flexbox}>
                <div className={classes.picbox}>
                    <div className={classes.pic}>
                        <img src={cappuccino} alt="pic"></img>
                    </div>
                </div>
                <div className={classes.infor}>
                    <div className={classes.name}>Cappuccino</div>
                    <div className={classes.evaluate}>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                    <div className={classes.price}>20.000 VND</div>
                    <div className={classes.button}>
                        <Button>Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
