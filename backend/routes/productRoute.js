const express = require('express');

const router = require.Router();

router.route('/products').get(getAllProducts);

module.exports = router