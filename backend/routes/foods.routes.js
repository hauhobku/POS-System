const express = require('express');
const foodRoutes = express.Router();
const foodsController = require('./../controllers/foods.controller');

foodRoutes.get('/list', foodsController.getList);
foodRoutes.post('/add', foodsController.addFoods);
foodRoutes.get('/detail/:id', foodsController.getDetail);
foodRoutes.put('/update/:id', foodsController.updateFoods);
foodRoutes.delete('/delete/:id', foodsController.delete);

module.exports = foodRoutes;