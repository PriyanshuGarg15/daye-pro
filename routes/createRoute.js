const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.route('/regular').post(productController.createTampons);
router.route('/super').post(productController.createTampons);
router.route('/product').post(productController.createTamponsUnit);

module.exports = router;