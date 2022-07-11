const express=require('express')
const User=require('../Models/usermodel')
const Activity = require('../Models/activitymodel')
const router=express.Router()
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {body, validationResult}=require('express-validator')

const secureKey="#R4UN4K#J4SM1N#"

    router.post('/createuser',[
        body("name","Enter Valid Name").isLength({min:5}),
        body("email","Enter valid Email").isEmail(),
        body("password","Enter minimum 5 character").isLength({min:5})

    ], async(req,res)=>{
         
        const errors= validationResult(req);

        try {
            if(!errors.isEmpty()){
              return res.status(400).json({error:errors.array()});
            }
         
            let success=false;
            let user= await User.findOne({email:req.body.email})
            //    console.log(user);
            if(user){
                return res.status(400).json({error:"Already have an account With this Email Procced to Login"})
            }
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const secpass = bcrypt.hashSync(req.body.password, salt);

            user = await User.create({
                name:req.body.name,
                email:req.body.email,
                password:secpass
            })
            let activity = await Activity.findOne({email:req.body.email})
            // if(activity){
            //     success=false;
            //     return res.status(400).json({error:"Already have an account With this Email Procced to Login"})
            // }
            activity = await Activity.create({
                name: req.body.name,
                email: req.body.email,
                questions: [0],
                user:user.id,
            })
         const  data={
            user:{
                id:user.id
            }
           }

           const token= jwt.sign(data, secureKey);

           success=true;
            //    console.error(errors.message)
            res.json({success,token})

        } catch (error) {
            console.error(error.message);
            res.status(400).json({error:"Not signed up"})
            
        }
    }),


    router.post('/login',[
        body("Email","Enter correct email").isEmail(),
        body("password","Enter Correct Password").isLength({min:5})
    ],async(req, res)=>{
              
           const errors=validationResult(req);
           const {email,password}=req.body;

           try {

               let success=false;
            if(!errors.isEmpty){
                success=false;
               return res.status(400).json({error:errors.array()})
            }
            let user = await User.findOne({email:email})
            console.log(user.password);

            if(!user){
                success=false;
              return  res.status(400).json({error:"invalid  Credential"})
            }
           const checkpass=bcrypt.compareSync(password, user.password); // true

          const data={
           user:{
            id:user.id
           }

        }
       const token= jwt.sign(data, secureKey);
           if(!checkpass){
            success=false;
            return  res.status(400).json({error:"invalid  Credential"})
          }
          success=true;
        //   res.cookie('token', token, { httpOnly: true });
        //   res.cookie()
               res.json({success,token})
             
            
           } catch (error) {
            console.error(error.message)
           return res.status(400).json({error:"Login not Success Please Enter Correct credentials"})
           }

    })


    module.exports = router;