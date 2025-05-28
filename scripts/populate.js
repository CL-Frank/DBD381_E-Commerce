const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('../src/models/products');
const User = require('../src/models/user');
const Order = require('../src/models/order');
const Review = require('../src/models/review');

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Connected to MongoDB for seeding");

    // Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    await Review.deleteMany();

    // Insert Products
    const products = await Product.insertMany([
      { _id: 'p1', name: 'Wireless Mouse', category: 'Electronics', price: 249.99, stock: 100, ratings: 4.3 },
      { _id: 'p2', name: 'Bluetooth Speaker', category: 'Electronics', price: 399.99, stock: 50, ratings: 4.5 },
      { _id: 'p3', name: 'Mechanical Keyboard', category: 'Electronics', price: 699.99, stock: 75, ratings: 4.7 },
      { _id: 'p4', name: 'USB-C Hub', category: 'Accessories', price: 199.99, stock: 80, ratings: 4.1 },
      { _id: 'p5', name: 'Webcam', category: 'Electronics', price: 329.99, stock: 40, ratings: 4.0 },
      { _id: 'p6', name: 'Monitor 24-inch', category: 'Electronics', price: 1799.99, stock: 25, ratings: 4.6 },
      { _id: 'p7', name: 'Smartphone Stand', category: 'Accessories', price: 89.99, stock: 150, ratings: 4.2 },
      { _id: 'p8', name: 'Noise-Canceling Headphones', category: 'Electronics', price: 999.99, stock: 30, ratings: 4.8 },
      { _id: 'p9', name: 'External Hard Drive 1TB', category: 'Storage', price: 1149.99, stock: 60, ratings: 4.4 },
      { _id: 'p10', name: 'Wireless Charger', category: 'Accessories', price: 299.99, stock: 90, ratings: 4.3 }
    ]);

    // Insert Users
    const users = await User.insertMany([
      { _id: 'u1', name: 'Jane Doe', email: 'jane@example.com', address: '123 Main Rd, Pretoria', joinDate: new Date() },
      { _id: 'u2', name: 'John Smith', email: 'john@example.com', address: '45 Blue Ave, Joburg', joinDate: new Date() },
      { _id: 'u3', name: 'Alice Brown', email: 'alice@example.com', address: '7 Sunset Blvd, Cape Town', joinDate: new Date() },
      { _id: 'u4', name: 'Bob White', email: 'bob@example.com', address: '12 Seaview St, Durban', joinDate: new Date() },
      { _id: 'u5', name: 'Charlie Green', email: 'charlie@example.com', address: '89 Tech Park, Centurion', joinDate: new Date() },
      { _id: 'u6', name: 'Diana Gray', email: 'diana@example.com', address: '34 Oak Dr, Bloemfontein', joinDate: new Date() },
      { _id: 'u7', name: 'Evan Black', email: 'evan@example.com', address: '3 Cloud Ln, Nelspruit', joinDate: new Date() },
      { _id: 'u8', name: 'Fiona Red', email: 'fiona@example.com', address: '22 Sky High St, Polokwane', joinDate: new Date() },
      { _id: 'u9', name: 'Gabe Indigo', email: 'gabe@example.com', address: '91 Rainforest Rd, Port Elizabeth', joinDate: new Date() },
      { _id: 'u10', name: 'Hannah Blue', email: 'hannah@example.com', address: '14 Lakeview Ave, George', joinDate: new Date() }
    ]);

    // Insert Orders (each user gets 1 order)
    for (let i = 1; i <= 10; i++) {
      await Order.create({
        _id: `o${i}`,
        userId: `u${i}`,
        orderDate: new Date(),
        products: [
          { productId: `p${(i % 10) + 1}`, quantity: 1 },
          { productId: `p${((i + 1) % 10) + 1}`, quantity: 2 }
        ],
        status: i % 2 === 0 ? 'Shipped' : 'Processing'
      });
    }

    // Insert Reviews (random user and product combinations)
    const reviewDocs = [];
    for (let i = 1; i <= 10; i++) {
      reviewDocs.push({
        _id: `r${i}`,
        productId: `p${(i % 10) + 1}`,
        userId: `u${((i + 2) % 10) + 1}`,
        rating: Math.floor(Math.random() * 2) + 4, // rating 4 or 5
        comment: `Great product ${i}`,
        timestamp: new Date()
      });
    }
    await Review.insertMany(reviewDocs);

    console.log("✅ Database seeded successfully with 10 items each");
    process.exit();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seedDatabase();