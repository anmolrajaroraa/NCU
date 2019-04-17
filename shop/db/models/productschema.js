const mongoose = require("../connection");
const Product = mongoose.Schema;
const ProductSchema = new Product({
    'product_id':{type:Number,unique:true,required:true},
    'product_name':{type:String, default:'AAAAA'},
    'product_url':{type:String},
    'sub_category_id':{type:Number,default:0},
    'price': {type:Number, default:0}
});
const ProductModel = mongoose.model('products',ProductSchema);
module.exports = ProductModel;
