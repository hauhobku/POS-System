import { createSlice } from '@reduxjs/toolkit';

export const viewFoodSlice = createSlice({
    name: 'view fodd',
    initialState: {
        listfood: [],
        viewfood: [],
    },
    reducers: {
        getCustomerViewAction: (state, action) => {
            state.listfood = action.payload;
            state.viewfood = action.payload;
        },
        setviewfood: (state, action) => {
            state.viewfood = state.listfood.filter(item => item.name.toLowerCase().indexOf(action.payload) !== -1);
        }
    }
})

export const { getCustomerViewAction, setviewfood} = viewFoodSlice.actions;
export default viewFoodSlice.reducer;