import accountReducer from './accountReducer';
import cartReducer from './menuReduce';
import customerReducer from './customerReducer';
import foodsReducer from './foodsReducer';
import employeeReducer from './employeeReducer';
import viewReduce from './viewReduce';
import viewFoodReducer from './viewFoodReducer';

const rootReducer = {
    Account: accountReducer,
    Cart: cartReducer,
    Customers: customerReducer,
    Foods: foodsReducer,
    Employees: employeeReducer,
    Views: viewReduce,
    ViewFood: viewFoodReducer,
}

export default rootReducer;