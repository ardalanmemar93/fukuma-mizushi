const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, required: true },
  anime: { type: String, required: true },
  // Add other character details as needed
}, {
  timestamps: true,
});

module.exports = mongoose.model('Character', characterSchema);