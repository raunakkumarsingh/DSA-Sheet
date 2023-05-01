const express=require('express');
const config=require('../Middleware/config')
const { JsonWebTokenError } = require('jsonwebtoken');
const fetchuser=require('../Middleware/fetch')
const nodemailer=require('nodemailer');
const User=require('../Models/usermodel')
var jwt = require('jsonwebtoken')
var bcrypt=require('bcrypt')


const router=express.Router()


router.post('/send/welcome',async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email})
        if(!user){
            res.status(400).json({error:"No such user with this email ID exists."})
        }

       
        let transporter = nodemailer.createTransport(config);
        let info = await transporter.sendMail({
            from: '"Welcome to DSA SHEET" <dsasheet.notification@gmail.com>', // sender address
            to: `${req.body.email}`, // list of receivers of receivers
            subject: "Welcome to DSA-SHEET", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world hello?</b>", // html body
          });
          console.log(info);
          res.send({send:"success",accepted:info.accepted});


      
    }
    catch{
        console.error(error.message);
        res.status(400).json({error:"Mail not send"});
    }
})

router.post('/send/message',async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email})
        if(!user){
            res.status(400).json({error:"No such user with this email ID exists."})
        }

       
        let transporter = nodemailer.createTransport(config);
        let info = await transporter.sendMail({
            from: `${req.body.from} <dsasheet.notification@gmail.com>`, // sender address
            to: `${req.body.email}`, // list of receivers of receivers
            subject: `${req.body.subject}`, // Subject line
            text: `${req.body.text}`, // plain text body
            html: `${req.body.html}`, // html body
          });
          console.log(info);
          res.send({send:"success",accepted:info.accepted});


      
    }
    catch{
        console.error(error.message);
        res.status(400).json({error:"Mail not send"});
    }
})

router.post('/send/otp',async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email})
        if(!user){
            res.status(400).json({error:"No such user with this email ID exists."})
        }
        var minm = 10000;var maxm = 99999;
        var otp= Math.floor(Math.random() * (maxm - minm + 1)) + minm;
        // console.log(otp)
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const secpass = bcrypt.hashSync(`${otp}`, salt);
        // console.log(secpass)

       
        let transporter = nodemailer.createTransport(config);
        let info = await transporter.sendMail({
            from: '"DSA-SHEET" <dsasheet.notification@gmail.com>', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: "OTP", // Subject line
            text: "Hello world?", // plain text body
            html: `<h2>DSA-Sheet Verification</h2><br><h3>Your OTP is ${otp}</h3>`, // html body
          });
          console.log(info);
          console.log(otp);
          res.send({send:"success",Otp:secpass});


      
    }
    catch(error){
        console.error(error.message);
        res.status(400).json({error:"Otp not send Please send again"});
    }
})
module.exports = router;
