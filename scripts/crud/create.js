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
    _id: 'pr101',
    name: 'Logitech MX Master 3',
    category: 'Electronics',
    price: 1499.99,
    stock: 35,
    ratings: 4.8
  });

  await User.create({
    _id: 'us101',
    name: 'Leah Mokoena',
    email: 'leah.mokoena@example.com',
    address: '17 Ridgeway Lane, Johannesburg',
    joinDate: new Date()
  });

  await Order.create({
    _id: 'or101',
    userId: 'us101',
    orderDate: new Date(),
    products: [{ productId: 'pr101', quantity: 1 }],
    status: 'Processing'
  });

  await Review.create({
    _id: 'rw101',
    productId: 'pr101',
    userId: 'us101',
    rating: 5,
    comment: 'Excellent mouse — ergonomic and reliable!',
    timestamp: new Date()
  });

  console.log("\n✅ New documents created:");
  console.log("\nProduct Added ");
  console.table([await Product.findOne({ _id: 'pr101' }).lean()]);
  console.log("\User Added ");
  console.table([await User.findOne({ _id: 'us101' }).lean()]);
  console.log("\Order Added ");
  console.table([await Order.findOne({ _id: 'or101' }).lean()]);
  console.log("\Review Added ");
  console.table([await Review.findOne({ _id: 'rw101' }).lean()]);
}

module.exports = runCreate;
