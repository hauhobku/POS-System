import React, { useState } from 'react'
import { useStyles } from './createFood.style.component'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addFoodAction } from './../../reducer/foodsReducer';

function CreateFood() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [food, setFood] = useState({
        name: '',
        img: '',
        price: 0,
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFood({...food, [name]: value});
    }

    const handleAdd = async () => {
        try {
            const result = axios.post("http://localhost:3300/api/v1/food/add", food);
            dispatch(addFoodAction(food));
            alert("Thêm thành công!");
        }
        catch (error) {
            alert("Thêm không thành công!");
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div>
                    <p>THÊM MÓN ĂN</p>
                </div>
            </div>

            <div className={classes.boxmain}>
                <form action="" autoComplete="off">
                    <input onChange={handleChange} type="text" name="name" placeholder="Tên món ăn"></input>
                    <input onChange={handleChange} type="text" name="img" placeholder="Link hình ảnh món ăn"></input>
                    <input onChange={handleChange} type="number" name="price" placeholder="Giá món ăn"></input>
                    <div className={classes.btn}>
                    <Button onClick={handleAdd} type="submit">
                        <AddIcon/> Thêm món
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateFood
