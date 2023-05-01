const express=require('express')
const User=require('../Models/usermodel')
const ActivityDSA = require('../Models/activityModelDSA')
const ActivityFaraj = require('../Models/activityModelSFaraj')
const ActivityStriver = require('../Models/activityModelStriver')
const router=express.Router()
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const {body, validationResult}=require('express-validator')

const secureKey=process.env.secureKey;


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
            // let activityDSA = await ActivityDSA.findOne({email:req.body.email})
            // let activityLove = await ActivityFaraj.findOne({email:req.body.email})
            // let activityStriver = await ActivityStriver.findOne({email:req.body.email})
            // if(activity){
            //     success=false;
            //     return res.status(400).json({error:"Already have an account With this Email Procced to Login"})
            // }
            activityD = await ActivityDSA.create({
                name: req.body.name,
                email: req.body.email,
                love: [0],
                Array:0,
                Matrix:0,
                String:0,
                Search:0,
                Linked:0,
                Binary:0,
                BST:0,
                Greedy:0,
                Backtracking:0,
                Stacks:0,
                Heap:0,
                Graph:0,
                Trie:0,
                Dynamic:0,
                Bit:0,
                user:user.id,
            })
            activityL = await ActivityFaraj.create({
                name: req.body.name,
                email: req.body.email,
                faraj: [0],
                user:user.id,
            })
            activityS = await ActivityStriver.create({
                name: req.body.name,
                email: req.body.email,
                striver: [0],
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


    // Forget Password
    router.post('/forget',[
        body("Email","Enter correct email").isEmail(),
        body("password","Enter Correct Confirm Password").isLength({min:8}),
        body("confirmPassword","Enter Correct Password").isLength({min:8})
    ],async(req, res)=>{
              
           const errors=validationResult(req);
           const {email,password,confirmPassword}=req.body;

           try {

               let success=false;
            if(!errors.isEmpty){
                success=false;
               return res.status(400).json({error:errors.array()})
            }
            let user = await User.findOne({email:email})
            if(!user){
                success=false;
              return  res.status(400).json({error:"User not found Please try again"})
            }
            console.log(user)
          if(password!=confirmPassword){
            return  res.status(400).json({error:"password and confirm password doesn't match "})
          }
          const saltRounds = 10;
          const salt = bcrypt.genSaltSync(saltRounds);
          const secpass = bcrypt.hashSync(req.body.password, salt);
          user= await User.findByIdAndUpdate({_id:user.id},{
             $set:{password:secpass}
          },{new:true})
         
       
          success=true;
               res.json({success})
             
            
           } catch (error) {
            console.error(error.message)
           return res.status(400).json({error:"Password Forget Error please request again"})
           }

    })


    module.exports = router;