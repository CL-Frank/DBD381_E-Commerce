const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: String,
  productId: String,
  userId: String,
  rating: Number,
  comment: String,
  timestamp: Date
});

module.exports = mongoose.model('Review', reviewSchema);