# Snigdha Women’s World – Authentic Panchaloha Jewelry

## Overview
This backend application serves as the data layer for the e-commerce platform "Snigdha Women’s World – Authentic Panchaloha Jewelry." It provides RESTful APIs for products, categories, cart, and checkout functionalities.

## MongoDB Integration
The backend has been upgraded to use MongoDB with Mongoose for data persistence. The `data/` folder has been renamed to `models/`, and mock data has been replaced with Mongoose models.

## Key Changes
- **Data Layer**: Mock data replaced with Mongoose models.
- **Controllers**: Updated to use Mongoose queries.
- **Cart**: Still in-memory for simplicity.
- **Orders**: Persisted to MongoDB.

## API Endpoints
The API endpoints remain unchanged, ensuring seamless frontend integration.

### Products
- `GET /api/products` - Fetch all products.
- `GET /api/products/:slug` - Fetch product by slug.

### Categories
- `GET /api/categories` - Fetch all categories.

### Cart
- `GET /api/cart` - View cart.
- `POST /api/cart` - Add to cart.
- `PUT /api/cart/:productId` - Update cart item.
- `DELETE /api/cart/:productId` - Remove cart item.

### Checkout / Orders
- `POST /api/checkout` - Create an order.
- `GET /api/orders/:id` - Fetch order by ID.

## Error Handling
All database operations are wrapped in `try/catch` blocks, and errors are handled by the global error middleware.

## Frontend Integration
The response formats and API structure remain unchanged, ensuring compatibility with the existing frontend.

---

