let cart = [];

// View cart
const viewCart = (req, res) => {
  res.json(cart);
};

// Add to cart
const addToCart = (req, res) => {
  const { productId, title, price, quantity } = req.body;
  const existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    res.status(400).json({ message: 'Item already in cart' });
  } else {
    const newItem = { productId, title, price, quantity, subtotal: price * quantity };
    cart.push(newItem);
    res.status(201).json(newItem);
  }
};

// Update cart item
const updateCartItem = (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const item = cart.find(item => item.productId === productId);

  if (item) {
    item.quantity = quantity;
    item.subtotal = item.price * quantity;
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found in cart' });
  }
};

// Remove cart item
const removeCartItem = (req, res) => {
  const { productId } = req.params;
  const index = cart.findIndex(item => item.productId === productId);

  if (index !== -1) {
    const removedItem = cart.splice(index, 1);
    res.json(removedItem);
  } else {
    res.status(404).json({ message: 'Item not found in cart' });
  }
};

module.exports = { viewCart, addToCart, updateCartItem, removeCartItem };