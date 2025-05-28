const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: String,
    name: String,
    category: String,
    price: Number,
    stock: Number,
    ratings: Number
});

module.exports = mongoose.model('Product', productSchema);