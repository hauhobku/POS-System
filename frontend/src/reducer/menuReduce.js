import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'menu',
    initialState: {
       foods: [],
       total: 0,
    },
    reducers: {
        addfoodAction: (state, action) => {
            if (localStorage.getItem("account") === null)
            {
                alert("Bạn chưa đăng nhập!");
                return;
            }

            const item = action.payload;
            if (state.foods.length === 0)
            {
                state.foods.push(item);
            }
            else {
                const length = state.foods.length;
                let checkContain = false;
                for (let i = 0; i < length; i++)
                {
                    if (state.foods[i].foodInfo.id === item.foodInfo.id)
                    {
                        state.foods[i].quantity ++;
                        checkContain = true;
                    }
                }
                if (checkContain === false)
                {
                    state.foods.push(item);
                }
            }
            state.total += item.foodInfo.price;
        },
        reducefoodAction: (state, action) => {
            if (localStorage.getItem("account") === null)
            {
                alert("Bạn chưa đăng nhập!");
                return;
            }

            const item = action.payload;
            let index = -1;
            let checkToRemove = false;
            for (let i = 0; i < state.foods.length; i++)
            {
                if (state.foods[i].foodInfo.id === item.foodInfo.id)
                {
                    state.foods[i].quantity --;
                    state.total -= item.foodInfo.price;
                    index = i;
                    if (state.foods[i].quantity === 0)
                    {
                        checkToRemove = true;
                    }
                }
            }

            if (checkToRemove && index > -1)
            {
                state.foods.splice(index, 1);
            }
        },
        deletefoodAction: (state, action) => {
            if (localStorage.getItem("account") === null)
            {
                alert("Bạn chưa đăng nhập!");
                return;
            }

            const item = action.payload;
            let index = -1;
            for (let i = 0; i < state.foods.length; i++)
            {
                if (state.foods[i].foodInfo.id === item.foodInfo.id)
                {
                    state.total -= item.foodInfo.price * item.quantity;
                    index = i;
                }
            }

            if (index > -1)
            {
                state.foods.splice(index, 1);
            }
        },
        clearAction: (state) => {
            state.total = 0;
            state.foods = [];
        }
    }
})

export const { addfoodAction, deletefoodAction, reducefoodAction, clearAction } = cartSlice.actions;
export default cartSlice.reducer;