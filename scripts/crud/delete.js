const { connect, Product, User, Order, Review } = require('./utils');

async function runDelete() {
  await connect();

  console.log("\n❌ [DELETE] Preparing to remove test documents...");

  console.log("\n🔍 Documents BEFORE deletion:");
  console.table([await Product.findOne({ _id: 'pr101' }).lean()]);
  console.table([await User.findOne({ _id: 'us101' }).lean()]);
  console.table([await Order.findOne({ _id: 'or101' }).lean()]);
  console.table([await Review.findOne({ _id: 'rw101' }).lean()]);

  console.log("\n🚮 Deleting one document from each collection...");

  await Product.deleteOne({ _id: 'pr101' });
  await User.deleteOne({ _id: 'us101' });
  await Order.deleteOne({ _id: 'or101' });
  await Review.deleteOne({ _id: 'rw101' });

  console.log("\n✅ Documents AFTER deletion:");
  console.table([await Product.findOne({ _id: 'pr101' }).lean()]);
  console.table([await User.findOne({ _id: 'us101' }).lean()]);
  console.table([await Order.findOne({ _id: 'or101' }).lean()]);
  console.table([await Review.findOne({ _id: 'rw101' }).lean()]);
}

module.exports = runDelete;
