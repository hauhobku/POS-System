import { createSlice } from '@reduxjs/toolkit';

export const foodsSlice = createSlice({
    name: 'food',
    initialState: {
        foods: [],
        foodload: {},
        foodsview: [],
    },
    reducers: {
        getFoodsAction: (state, action) => {
            state.foods = action.payload;
            state.foodsview = action.payload;
        },
        deleteFoodsAction: (state, action) => {
            let index = -1;
            for (let i = 0; i < state.foods.length; i++)
            {
                if (action.payload === state.foods[i].id)
                {
                    index = i;
                    return;
                }
            }
            if (index > -1)
            {
                state.foods.splice(index, 1);
            }
        },
        getFoodLoadAction: (state, action) => {
            state.foodload = action.payload;
        },
        addFoodAction: (state, action) => {
            state.foods.push(action.payload);
        },
        updateFoodAction: (state, action) => {
            for (let i = 0; i < state.foods.length; i++)
            {
                if (state.foods[i].id === action.payload.id)
                {
                    const newfoods = state.foods;
                    newfoods[i] = action.payload;
                    state.foods = newfoods;
                }
            }
        },
        setFoodView: (state, action) => {
            state.foodsview = state.foods.filter(item => item.name.toLowerCase().indexOf(action.payload) !== -1);
        }
    }
})

export const { getFoodsAction, setFoodView, updateFoodAction, deleteFoodsAction, getFoodLoadAction, addFoodAction } = foodsSlice.actions;
export default foodsSlice.reducer;