const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
      /* image_url: {
            type: String,
            default: ''
        },*/
        
        title : {
            type: String,
            required: true // [true,"Le nom de l'utilisateur est obligatoire"],
        },
        description:{
            type:String ,
            require : true
        },
        price : {
            type: Number  ,
            require : true
        },
       
        },
   
)
module.exports=mongoose.model("Product" ,productSchema) 