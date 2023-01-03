const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const mongoose = require('mongoose');

(async function run() {
  let db;
  try {
    db = await mongoose.createConnection(process.env.DB_URL);
    const coll = db.collection('products');
    const result = await coll.insertMany(require('./products-data'));
    console.log(result.insertedIds);
  } catch (e) {
    console.log(e);
  } finally {
    await db?.close();
  }
})();
