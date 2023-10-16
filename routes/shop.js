
const express = require('express');

const productsController = require('../controllers/product.controller')
 

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
