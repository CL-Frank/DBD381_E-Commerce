const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  address: String,
  joinDate: Date
});

module.exports = mongoose.model('User', userSchema);