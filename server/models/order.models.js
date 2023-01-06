const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    client_name:{
        type: String,
    },
    client_country: {
        type: String,
    },
    client_city: {
        type: String,
    },
    client_ip: {
        type: String,
    },
    card_type: {
        type: String,
    },
    card_id: {
        type: String,
    }
},
    { collection: "orders" })

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order