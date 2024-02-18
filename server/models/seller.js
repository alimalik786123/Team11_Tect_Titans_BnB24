const mongoose=require('mongoose');
const seller=mongoose.Schema({
    
    // Groupchat:{
    //     type:Boolean,default:false  
    // },
    name:{
        type:String,
        
    },
    email:
        {
    type:String
},
    password:{
        type:String
    },
    img:{
        type:String
    }
    // groupAdmin:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User"
    // }
},{
    timestamps:true
})
const Seller=mongoose.model("seller",seller)
module.exports=Seller 