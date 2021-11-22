import { createSlice } from '@reduxjs/toolkit';

const local = JSON.parse(localStorage.getItem('account'));

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        acc: (local) ? local.customer : {
            email: "",
            name: "",
            phone: "",
            username: "",
        },
    },
    reducers: {
        loginAction: (state, action) => {
            state.acc = action.payload;
        },
        logoutAction: (state) => {
            state.acc = {
                email: "",
                name: "",
                phone: "",
                username: "",
            };
            localStorage.removeItem("account");
        },
    },
});

export const { loginAction, logoutAction } = accountSlice.actions;

export default accountSlice.reducer;