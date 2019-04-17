const ProductModel  = require('../models/productschema');
const productOperations = {
    add(products,response){
        ProductModel.insertMany(products,(err)=>{
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
        ProductModel.find((err,data)=>{
            if(err){
                response.status(500).json({status:200});
            }
            else{
                console.log(response);
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
module.exports = productOperations;