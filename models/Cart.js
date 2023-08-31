const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
    {
        productNumber : {
            type: Number,
            required: true // [true,"Le nom de l'utilisateur est obligatoire"],
        },
        productbrand:{
            type:String ,
            require : true
        },
        price : {
            type: Number  ,
            require : true
        },
       
        image_url: {
          type: String,
          default: ''
      },
      
    },
   
)
module.exports=mongoose.model("Cart" ,cartSchema) 