const OrderModel  = require('../models/orderschema');
const orderOperations = {
    add(order,response){
        console.log(order);
        OrderModel.create({'order':order},(err,doc)=>{
            if(err){
                console.log(':::::::Error is ',err); 
                  response.status(500).json({message:'Order Not Placed!'})  
                       
                    }
            else{
                if(doc){
                    console.log('Order placed');
                }
                else{
                    console.log('Order was not placed!');
                }  
                //response.json({message:'File Uploaded...'}); 
                
            }
        })
    },
    get(response){
        OrderModel.find( (err,data)=>{
            if(err){
                response.status(500).json({status:200});
            }
            else{
                //console.log(response);
                if(data){
                    response.status(200).json(data);
                    console.log('Get method data' , data);
                }
                else{
                    response.status(404).json({status:404});
                }
            }
        });
    }
}
module.exports = orderOperations;