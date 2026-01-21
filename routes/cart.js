const express = require('express');
const router = express.Router();
const { viewCart, addToCart, updateCartItem, removeCartItem } = require('../controllers/cartController');

// GET view cart
router.get('/', viewCart);

// POST add to cart
router.post('/', addToCart);

// PUT update cart item
router.put('/:productId', updateCartItem);

// DELETE remove cart item
router.delete('/:productId', removeCartItem);

module.exports = router;