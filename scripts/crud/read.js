const { connect, Product, User, Order, Review } = require('./utils');

async function runRead() {
  await connect();

  console.log("\n🔍 [READ] Fetching specific documents by ID...");

  const product = await Product.findOne({ _id: 'cp1' }).lean();
  const user = await User.findOne({ _id: 'cu1' }).lean();
  const order = await Order.findOne({ _id: 'co1' }).lean();
  const review = await Review.findOne({ _id: 'cr1' }).lean();

  console.log("\n🧾 Product with ID 'cp1':");
  console.table([product]);

  console.log("\n👤 User with ID 'cu1':");
  console.table([user]);

  console.log("\n📦 Order with ID 'co1':");
  console.table([order]);

  console.log("\n💬 Review with ID 'cr1':");
  console.table([review]);
}

module.exports = runRead;
