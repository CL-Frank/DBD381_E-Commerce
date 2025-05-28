const { connect, Product, User, Order, Review } = require('./utils');

async function runDelete() {
  await connect();

  console.log("\n❌ [DELETE] Preparing to remove test documents...");

  console.log("\n🔍 Documents BEFORE deletion:");
  console.table([await Product.findOne({ _id: 'cp1' }).lean()]);
  console.table([await User.findOne({ _id: 'cu1' }).lean()]);
  console.table([await Order.findOne({ _id: 'co1' }).lean()]);
  console.table([await Review.findOne({ _id: 'cr1' }).lean()]);

  console.log("\n🚮 Deleting one document from each collection...");

  await Product.deleteOne({ _id: 'cp1' });
  await User.deleteOne({ _id: 'cu1' });
  await Order.deleteOne({ _id: 'co1' });
  await Review.deleteOne({ _id: 'cr1' });

  console.log("\n✅ Documents AFTER deletion:");
  console.table([await Product.findOne({ _id: 'cp1' }).lean()]);
  console.table([await User.findOne({ _id: 'cu1' }).lean()]);
  console.table([await Order.findOne({ _id: 'co1' }).lean()]);
  console.table([await Review.findOne({ _id: 'cr1' }).lean()]);
}

module.exports = runDelete;
