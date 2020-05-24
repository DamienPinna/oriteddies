const mongoose = require('mongoose');

/**
 * Création d'un schéma mongoose
 */
const teddySchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  colors: { type: [String], required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Teddy', teddySchema);