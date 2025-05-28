const { connect, Product, User, Order, Review } = require('./utils');

async function runRead() {
  await connect();

  console.log("\n🔍 [READ] Fetching specific documents by ID...");

  const product = await Product.findOne({ _id: 'pr101' }).lean();
  const user = await User.findOne({ _id: 'us101' }).lean();
  const order = await Order.findOne({ _id: 'or101' }).lean();
  const review = await Review.findOne({ _id: 'rw101' }).lean();

  console.log("\n🧾 Product with ID 'pr101':");
  console.table([product]);

  console.log("\n👤 User with ID 'us101':");
  console.table([user]);

  console.log("\n📦 Order with ID 'or101':");
  console.table([order]);

  console.log("\n💬 Review with ID 'rw101':");
  console.table([review]);
}

module.exports = runRead;
