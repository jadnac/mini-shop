const mongoose = require('mongoose');

const AddToCartSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    product_size: {
        type: Number,
        required: true
    },
    product_color: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true  
    },
    product_image: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    }
},
    { collection: "addtocart" })

const AddToCart = mongoose.model("AddToCart", AddToCartSchema);
module.exports = AddToCart