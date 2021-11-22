const express = require('express');
const rootRoutes = express.Router();

const customerRoutes = require('./customers.routes');
const adminsRoutes = require('./admins.routes');
const employeeRoutes = require('./employees.routes');
const foodRoutes = require('./foods.routes');

rootRoutes.use('/customer', customerRoutes);
rootRoutes.use('/admin', adminsRoutes);
rootRoutes.use('/employee', employeeRoutes);
rootRoutes.use('/food', foodRoutes);

module.exports = rootRoutes;