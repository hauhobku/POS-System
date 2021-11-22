import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        value: 0,
        active: 0,
    },
    reducers: {
        setValueAction: (state, action) => {
            console.log(action.payload);
            state.value = action.payload.value;
            state.active = action.payload.active;
        }
    }
})

export const { setValueAction } = viewSlice.actions;
export default viewSlice.reducer;