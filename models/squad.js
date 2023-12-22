const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const squadSchema = new Schema({
  name: { type: String, required: true },
  characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Squad', squadSchema);
