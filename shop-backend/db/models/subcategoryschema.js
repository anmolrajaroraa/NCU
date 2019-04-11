const mongoose = require("../connection");
const SubCategory = mongoose.Schema;
const SubCategorySchema = new SubCategory({
    'sub_category_id':{type:Number,unique:true,required:true},
    'sub_category_name':{type:String, default:'AAAAA'},
    'sub_category_url':{type:String},
    'products':{type:Array},
    'category_id':{type:Number,default:0}
});
const SubCategoryModel = mongoose.model('subcategories', SubCategorySchema);
module.exports = SubCategoryModel;
