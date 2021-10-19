const express = require('express');
const { getAllProducts,createProduct, updateProducts } = require('../controllers/productController');


const router = express.Router();

router.route('/products').get(getAllProducts);


router.route('/product/new').post(createProduct);

router.route('/products/:id').put(updateProducts);

module.exports = router;