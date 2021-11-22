const express = require('express');
const adminsRoutes = express.Router();
const adminsController = require('./../controllers/admins.controller');
const authenticate = require('./../middleware/authenticate');

adminsRoutes.post('/register', adminsController.register);
adminsRoutes.post('/login', adminsController.login);
adminsRoutes.get('/detail/:email', authenticate, adminsController.getDetail);
adminsRoutes.put('/update/:email', authenticate, adminsController.updateAdmins);
adminsRoutes.put('/changepw/:email', authenticate, adminsController.changePassword);

module.exports = adminsRoutes;