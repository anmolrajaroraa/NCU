const mongoose = require("../connection");
const Order = mongoose.Schema;
const OrderSchema = new Order({
    'order':[{
        'product_name':String,
        'sub_category_id':Number,
        'price':Number,
        'product_id':Number,
        'product_url':String
    }]
});
const OrderModel = mongoose.model('orders',OrderSchema);
module.exports = OrderModel;
