const express = require('express');
const employeeRoutes = express.Router();
const employeeController = require('./../controllers/employees.controller');

employeeRoutes.get('/list', employeeController.getList);
employeeRoutes.post('/add', employeeController.addEmployee);
employeeRoutes.get('/detail/:email', employeeController.getDetail);
employeeRoutes.put('/update/:email', employeeController.updateEmployee);
employeeRoutes.delete('/delete/:email', employeeController.delete);

module.exports = employeeRoutes;