import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        customers: [],
        customersview: [],
    },
    reducers: {
        getCustomersAction: (state, action) => {
            state.customers = action.payload;
            state.customersview = action.payload;
        },
        setCustomerView: (state, action) => {
            state.customersview = state.customers.filter(item => item.name.toLowerCase().indexOf(action.payload) !== -1);
        }
    }
})

export const { getCustomersAction, setCustomerView } = customerSlice.actions;
export default customerSlice.reducer;