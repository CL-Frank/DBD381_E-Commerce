const runCreate = require('./scripts/crud/create');
const runRead = require('./scripts/crud/read');
const runUpdate = require('./scripts/crud/update');
const runDelete = require('./scripts/crud/delete');

async function runAllCRUDTests() {
  console.log("\n🧪 STARTING CRUD TESTS...\n");

  await runCreate();
  await runRead();
  await runUpdate();
  await runDelete();

  console.log("\n✅ ALL CRUD TESTS COMPLETED\n");
  process.exit();
}

runAllCRUDTests();