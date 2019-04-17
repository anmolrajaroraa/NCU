const xlsxj = require('xlsx-to-json');
function readExcel(filePath,response){
  xlsxj({
      input: filePath, 
      output: "output.json",
      sheet: "Categories"
      
    }, function(err, result) {
      if(err) {
        console.error(err);
      }else {
        const categoryOperations = require("../db/helpers/categoryoperations");
        categoryOperations.add(result);
        //console.log("Category is",result);
      }
    });

    xlsxj({
      input: filePath, 
      output: "output.json",
      sheet: "SubCategories"
      
    }, function(err, result) {
      if(err) {
        console.error(err);
      }else {
        const subCategoryOperations = require("../db/helpers/subcategoryoperations");
        subCategoryOperations.add(result);
        console.log("SubCategories are",result);
      }
    });

    xlsxj({
      input: filePath, 
      output: "output.json",
      sheet: "Products"
      
    }, function(err, result) {
      if(err) {
        console.error(err);
      }else {
        const productOperations = require("../db/helpers/productoperations");
        productOperations.add(result);
        console.log("Products are",result);
        response.json({message:'File Uploaded...'}); 
      }
    });
    
}
module.exports = readExcel;
//readExcel('/Users/amit/Documents/NCU-FullStackBatch/shopserver/uploads/Sample_2019-03-30T07:17:05.522Z.xlsx')