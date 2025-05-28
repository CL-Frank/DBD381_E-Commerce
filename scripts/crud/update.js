const { connect, Product, User, Order, Review } = require('./utils');

async function runUpdate() {
  await connect();

  console.log("\n✏️ [UPDATE] Preparing to modify documents...");

  console.log("\n🗂️ BEFORE updates:");
  console.table([await Product.findOne({ _id: 'cp1' }).lean()]);
  console.table([await User.findOne({ _id: 'cu1' }).lean()]);
  console.table([await Order.findOne({ _id: 'co1' }).lean()]);
  console.table([await Review.findOne({ _id: 'cr1' }).lean()]);

  console.log("\n🔁 Applying updates to stock, address, status, and review comment...");

  await Product.updateOne({ _id: 'cp1' }, { $set: { stock: 20 } });
  await User.updateOne({ _id: 'cu1' }, { $set: { address: '456 Updated Rd' } });
  await Order.updateOne({ _id: 'co1' }, { $set: { status: 'Shipped' } });
  await Review.updateOne({ _id: 'cr1' }, { $set: { comment: 'Updated comment for testing' } });

  console.log("\n✅ AFTER updates:");
  console.table([await Product.findOne({ _id: 'cp1' }).lean()]);
  console.table([await User.findOne({ _id: 'cu1' }).lean()]);
  console.table([await Order.findOne({ _id: 'co1' }).lean()]);
  console.table([await Review.findOne({ _id: 'cr1' }).lean()]);
}

module.exports = runUpdate;
