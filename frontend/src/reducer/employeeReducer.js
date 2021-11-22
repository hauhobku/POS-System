import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
        emload: {},
        employeesview: [],
    },
    reducers: {
        getEmployeesAction: (state, action) => {
            state.employees = action.payload;
            state.employeesview = action.payload;
        },
        deleteEmployeeAction: (state, action) => {
            let index = -1;
            for (let i = 0; i < state.employees.length; i++)
            {
                if (action.payload === state.employees[i].email)
                {
                    index = i;
                    return;
                }
            }
            if (index > -1)
            {
                state.employees.splice(index, 1);
            }
        },
        getEmLoadAction: (state, action) => {
            state.emload = action.payload;
        },
        addEmAction: (state, action) => {
            state.employees.push(action.payload);
        },
        updateEmAction: (state, action) => {
            for (let i = 0; i < state.employees.length; i++)
            {
                if (state.employees[i].id === action.payload.id)
                {
                    const newemployees = state.employees;
                    newemployees[i] = action.payload;
                    state.employees = newemployees;
                }
            }
        },
        setEmployeeView: (state, action) => {
            state.employeesview = state.employees.filter(item => item.name.toLowerCase().indexOf(action.payload) !== -1);
        }
    }
})

export const { getEmployeesAction, setEmployeeView, getEmLoadAction, addEmAction, updateEmAction, deleteEmployeeAction } = employeeSlice.actions;
export default employeeSlice.reducer;