let orders = [];

// Create order
const createOrder = (req, res) => {
  const { items, totalAmount, customerDetails } = req.body;
  const newOrder = {
    id: orders.length + 1,
    items,
    totalAmount,
    customerDetails,
    status: 'Pending',
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

// Get order by ID
const getOrderById = (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

module.exports = { createOrder, getOrderById };