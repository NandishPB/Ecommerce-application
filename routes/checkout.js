const express = require('express');
const router = express.Router();
const { createOrder, getOrderById } = require('../controllers/checkoutController');

// POST create order
router.post('/', createOrder);

// GET order by ID
router.get('/:id', getOrderById);

module.exports = router;