const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: String,
    type : String,
    value: Number,
    sku: String
});

const Market = mongoose.model("market", ItemSchema);

module.exports = Market;