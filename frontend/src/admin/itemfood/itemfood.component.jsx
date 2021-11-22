import React from "react";
import { Grid, Button } from '@mui/material';
import { useStyles } from './itemfood.style.component';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import { Avatar } from '@mui/material';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFoodsAction, getFoodLoadAction } from './../../reducer/foodsReducer';
import { setValueAction } from './../../reducer/viewReduce';

function ItemFood(props) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    const food = props.food;

    const handleDelete = async () => {
        try {
            const result = await axios.delete(`http://localhost:3300/api/v1/food/delete/${food.id}`);
            dispatch(deleteFoodsAction(food.id));
            alert("Xóa thành công!");
        }
        catch (error) {
            alert("Xóa không thành công!");
        }
    }

    const viewUpdateFood = () => {
        var value = {
            value: 3,
            active: 3
        };
        dispatch(setValueAction(value));
    };

    const handleEdit = () => {
        dispatch(getFoodLoadAction(food));
        viewUpdateFood();
    }

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} spacing={2}>
                <Grid className={classes.item} item xs={1}>
                    {food.id}
                </Grid>
                <Grid className={classes.item} item xs={2}>
                    <Avatar alt="" src={food.img}/>
                </Grid>
                <Grid className={classes.item} item xs={5}>
                    {food.name}
                </Grid>
                <Grid className={classes.item} item xs={4}>
                    {food.price}
                </Grid>
            </Grid>
            <Button aria-describedby={id} onClick={handleClick}>
                <MoreVertIcon/>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className={classes.boxPop}>
                    <div>
                        <form>
                            <Button onClick={handleDelete} type="submit">
                                DELETE
                            </Button>
                        </form>
                    </div>
                    <div>
                        <Button onClick={handleEdit}>
                            EDIT
                        </Button>
                    </div>
                </div>
            </Popover>
        </div>
    );
}

export default ItemFood;
