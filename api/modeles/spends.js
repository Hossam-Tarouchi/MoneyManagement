const mongoose = require('mongoose');

const spendsSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    category: String,
    price: Number,
    description: String,
    at: Date
});

module.exports = mongoose.model('Spends', spendsSchema);