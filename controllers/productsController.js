const products = require('../data/products');

// Get all products
const getProducts = (req, res) => {
  res.json(products);
};

// Get product by slug
const getProductBySlug = (req, res) => {
  const product = products.find(p => p.slug === req.params.slug);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = { getProducts, getProductBySlug };