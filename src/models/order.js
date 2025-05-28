const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _id: String,
    userId: String,
    orderDate: Date,
    products: [
        {
            productId: String,
            quantity: Number
        }
    ],
    status: String
});

module.exports = mongoose.model('Order', orderSchema);