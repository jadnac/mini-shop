const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_prize: {
        type: Number,
        required: true
    },
    category_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true
    },
    product_size: {
        type: Array,
        required: true
    },
    product_color: {
        type: Array,
        required: true
    },
    product_images: {
        type: Array,
        required: true
    },
    product_description: {
        type: String,
        required: true
    }
},
    { collection: "products" })

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product