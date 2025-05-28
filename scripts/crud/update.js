const { connect, Product, User, Order, Review } = require('./utils');

async function runUpdate() {
  await connect();

  console.log("\n✏️ [UPDATE] Preparing to modify documents...");

  console.log("\n🗂️ BEFORE updates:");
  console.table([await Product.findOne({ _id: 'pr101' }).lean()]);
  console.table([await User.findOne({ _id: 'us101' }).lean()]);
  console.table([await Order.findOne({ _id: 'or101' }).lean()]);
  console.table([await Review.findOne({ _id: 'rw101' }).lean()]);

  console.log("\n🔁 Applying updates to stock, address, status, and review comment...");

  await Product.updateOne({ _id: 'pr101' }, { $set: { stock: 20 } });
  await User.updateOne({ _id: 'us101' }, { $set: { address: '456 Updated Rd' } });
  await Order.updateOne({ _id: 'or101' }, { $set: { status: 'Shipped' } });
  await Review.updateOne({ _id: 'rw101' }, { $set: { comment: 'Updated comment for testing' } });

  console.log("\n✅ AFTER updates:");
  console.table([await Product.findOne({ _id: 'pr101' }).lean()]);
  console.table([await User.findOne({ _id: 'us101' }).lean()]);
  console.table([await Order.findOne({ _id: 'or101' }).lean()]);
  console.table([await Review.findOne({ _id: 'rw101' }).lean()]);
}

module.exports = runUpdate;
