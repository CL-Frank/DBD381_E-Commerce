const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('../../src/models/product');
const User = require('../../src/models/user');
const Order = require('../../src/models/order');
const Review = require('../../src/models/review');

async function connect() {
  return mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DBNAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = { connect, Product, User, Order, Review };