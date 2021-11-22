import React, { useState } from 'react'
import { useStyles } from './updateFood.style.component'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateFoodAction } from './../../reducer/foodsReducer';

function UpdateFood() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const food = useSelector(state => state.Foods.foodload);

    const [nfood, setNfood] = useState(
        {
            name: '',
            img: '',
            price: 0,
        }
    )
    const handleChange = (e) => {
        const { value, name } = e.target;
        setNfood({...nfood, [name]: value});
    }

    const handleUpdate = async () => {
        try {
            const result = axios.put(`http://localhost:3300/api/v1/food/update/${food.id}`, nfood);
            dispatch(updateFoodAction(nfood));
            alert("Cập nhật thành công!");
        }
        catch (error) {
            alert("Cập nhật không thành công!");
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div>
                    <p>SỬA THÔNG TIN MÓN ĂN</p>
                </div>
            </div>

            <div className={classes.boxmain}>
                <form action="" autoComplete="off">
                    <input onChange={handleChange} type="text" name="name" placeholder={food.name}></input>
                    <input onChange={handleChange} type="text" name="img" placeholder={food.img}></input>
                    <input onChange={handleChange} type="number" name="price" placeholder={food.price}></input>
                    <div className={classes.btn}>
                    <Button onClick={handleUpdate}>
                        <AddIcon/> Cập nhật
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateFood