const express = require('express');
const router = express.Router();
const { getProducts, getProductBySlug } = require('../controllers/productsController');

// GET all products
router.get('/', getProducts);

// GET product by slug
router.get('/:slug', getProductBySlug);

module.exports = router;