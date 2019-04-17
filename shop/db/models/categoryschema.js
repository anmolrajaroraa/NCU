const mongoose = require("../connection");
const Category = mongoose.Schema;
const CategorySchema = new Category({
    'category_id':{type:Number,unique:true,required:true},
    'category_name':{type:String, default:'AAAAA'},
    'category_url':{type:String},
});
const CategoryModel = mongoose.model('categories',CategorySchema);
module.exports = CategoryModel;
