const categories = require('../data/categories');

// Get all categories
const getCategories = (req, res) => {
  res.json(categories);
};

module.exports = { getCategories };