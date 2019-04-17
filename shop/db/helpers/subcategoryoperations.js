const SubCategoryModel  = require('../models/subcategoryschema');
const subCategoryOperations = {
    add(subCategories,response){
        SubCategoryModel.insertMany(subCategories,(err)=>{
            if(err){
                console.log(':::::::Error is ',err); 
                  response.status(500).json({message:'File Not Uploaded...'})  
                       
                    }
            else{
                console.log('Uploaded...');  
                //response.json({message:'File Uploaded...'}); 
                
            }
        })
    },
    get(response){
        SubCategoryModel.find((err,data)=>{
            if(err){
                response.status(500).json({status:200});
            }
            else{
                if(data){
                    response.status(200).json(data);
                }
                else{
                    response.status(404).json({status:404});
                }
            }
        });
    }
}
module.exports = subCategoryOperations;