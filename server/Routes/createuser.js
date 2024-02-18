const express = require('express');
const Router = express.Router()
const User = require("../models/Schema");
const Seller=require("../models/seller")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { body, validationResult } = require('express-validator')
const jwt=require('jsonwebtoken')
const secret="mynameisalimalikmynameisalimalik"
const Companydetail=require("../models/companydetails")

Router.post("/user", jsonParser,
    [body('email').isEmail(),
    body('password').isLength({ min: 5 })]
    , async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        else {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password



            })
            
            res.json({ success: true })
        }
        // console.log(try1);
    })

Router.post("/login",jsonParser, [body('email').isEmail(),
body('password').isLength({ min: 5 })], async (req, res) => {
    var email = req.body.email
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    

        let userdata = await User.findOne({email})
        if (!userdata) {
            return res.status(404).json({ errors: "wrong email" })
        }

        else if (req.body.password !== userdata.password) {
            return res.status(400).json({ errors: "wrong password" })
        }
        const data={
            user:{
                id:userdata.id
            }
        }
        const token=jwt.sign(data,secret)
        return res.json({ success: true,token:token })
    
   
})

Router.post("/seller",jsonParser,async(req,res)=>{
    const {name,email,password,pic}=req.body
    if(!name||!email||!password){
        res.status(400);
    }
    else{
    const userExist=await User.findOne({"email":req.body.email}) 
    if(userExist){
        res.status(400);
    }
    else{
       const user=await Seller.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            pic:req.body.name.pic,
        });
        if(user){
            //const token=jwt.sign(user._id,secret)
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email, 
                pic:user.pic,
                token:user._id
            }) 
        }
    }
}
});


Router.post("/company",jsonParser,async(req,res)=>{
    const {name,email,password,pic}=req.body
   
       const user=await Companydetail.create({
            companyname:req.body.companyname,
            companyemail:req.body.companyemail,
            category:req.body.category,
            products:req.body.products,
            lic:req.body.lic,
            factory:req.body.factory,
            noofwarehouses:req.body.noofwarehouses,
            location:req.body.location,
            status:req.body.status,
            userid:req.body.userid

        });
        if(user){
            //const token=jwt.sign(user._id,secret)
            res.status(201).json({
                
                token:user._id
            }) 
        }
    
}
);


Router.post("/getcompany",jsonParser,async(req,res)=>{
    const {name,email,password,pic}=req.body
   
       const user=await Companydetail.find();
        if(user){
            //const token=jwt.sign(user._id,secret)
            res.status(201).json({
                
                data:user
            }) 
        }
    
}
);


Router.post("/getcompanyspec",jsonParser,async(req,res)=>{
    //const {name,email,password,pic}=req.body
   
       const user=await Companydetail.find({userid:req.body.id});
        if(user){
            //const token=jwt.sign(user._id,secret)
            res.status(201).json({
                
                data:user
            }) 
        }
    
}
);

Router.post("/approve",jsonParser,async(req,res)=>{
    //const {name,email,password,pic}=req.body
   
       const user=await Companydetail.updateOne({userid:req.body.id},{$set:{status :"v"}});
        if(user){
            //const token=jwt.sign(user._id,secret)
            res.status(201).json({
                
                data:user
            }) 
        }
    
}
);



module.exports = Router