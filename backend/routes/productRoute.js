const express = require('express');
const { getAllProducts,createProduct, updateProducts, deleteProduct } = require('../controllers/productController');


const router = express.Router();

router.route('/products').get(getAllProducts);


router.route('/product/new').post(createProduct);

router.route('/products/:id').put(updateProducts);

router.route('/products/:id').delete(deleteProduct);


module.exports = router;