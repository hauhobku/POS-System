const express = require('express');
const customerRoutes = express.Router();
const customerController = require('./../controllers/customers.controller');
const authenticate = require('./../middleware/authenticate');

customerRoutes.get('/list', customerController.getList);
customerRoutes.post('/register', customerController.register);
customerRoutes.post('/login', customerController.login);
customerRoutes.get('/detail/:email', authenticate, customerController.getDetail);
customerRoutes.put('/update/:email', authenticate, customerController.updateCustomer);
customerRoutes.put('/changepw/:email', authenticate, customerController.changePassword);
customerRoutes.delete('/delete/:email', customerController.delete);

module.exports = customerRoutes;