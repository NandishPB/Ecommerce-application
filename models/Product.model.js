const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: [String], default: [] },
  price: { type: Number, required: true },
  features: { type: [String], default: [] },
  specifications: {
    material: { type: String, required: true },
    sizes: { type: [String], default: [] },
    craftType: { type: String, required: true },
  },
  ratings: { type: Number, default: 0 },
  isHandmade: { type: Boolean, default: false },
  isAuthentic: { type: Boolean, default: false },
});

module.exports = mongoose.model('Product', productSchema);