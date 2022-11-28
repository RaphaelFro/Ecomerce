const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    weight: { type: String, required: true },
    country: { type: String, required: true },
    stock: { type: Number, required: true },
    imageURL: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);