const { connect, Product, User, Order, Review } = require('./utils');

async function runCreate() {
  await connect();

  console.log("\n🟢 [CREATE] Preparing to add one new document to each collection...");

  console.log("\n🔍 Checking if any existing entries conflict (IDs: cp1, cu1, co1, cr1)");
  console.table([await Product.findOne({ _id: 'cp1' }).lean()]);
  console.table([await User.findOne({ _id: 'cu1' }).lean()]);
  console.table([await Order.findOne({ _id: 'co1' }).lean()]);
  console.table([await Review.findOne({ _id: 'cr1' }).lean()]);

  console.log("\n✍️ Inserting new Product, User, Order, and Review...");

  await Product.create({
    _id: 'cp1',
    name: 'Created Mouse',
    category: 'Test',
    price: 123,
    stock: 15,
    ratings: 5
  });

  await User.create({
    _id: 'cu1',
    name: 'Create Tester',
    email: 'create@test.com',
    address: '123 Tester Lane',
    joinDate: new Date()
  });

  await Order.create({
    _id: 'co1',
    userId: 'cu1',
    orderDate: new Date(),
    products: [{ productId: 'cp1', quantity: 1 }],
    status: 'Processing'
  });

  await Review.create({
    _id: 'cr1',
    productId: 'cp1',
    userId: 'cu1',
    rating: 5,
    comment: 'Excellent!',
    timestamp: new Date()
  });

  console.log("\n✅ New documents created:");
  console.table([await Product.findOne({ _id: 'cp1' }).lean()]);
  console.table([await User.findOne({ _id: 'cu1' }).lean()]);
  console.table([await Order.findOne({ _id: 'co1' }).lean()]);
  console.table([await Review.findOne({ _id: 'cr1' }).lean()]);
}

module.exports = runCreate;
