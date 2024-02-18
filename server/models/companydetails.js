const mongoose = require('mongoose');
const companydetails= new mongoose.Schema({
    companyname:{
        type:String,
        required:true
    },
    companyemail:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    products:{
        type:String,
        required:true
    },
    lic:{
        type:String,
        required:true
    },
    factory:{
        type:String,
        required:true
    },
    noofwarehouses:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }

})
const User=mongoose.model("companydetail",companydetails)
module.exports=mongoose.model("companydetail",companydetails)