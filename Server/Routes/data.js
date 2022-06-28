const express = require('express')
const User=require('../Models/usermodel')
const Activity = require('../Models/activitymodel')
const fetchuser = require('../Middleware/fetch')
const { findByIdAndUpdate } = require('../Models/activitymodel')
const router = express.Router()

// add question to array
router.post('/updatedata/:id',fetchuser, async (req,res) => {
try{
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"No such user with this email ID exists."});
    }
    let activity = await Activity.findById(req.params.id);
        //    console.log(activity)
    if(!activity){
     return   res.status(401).send({error:"Data not found"})
    }
    if(activity.user.toString() !== req.user.id ){
     return   res.status(401).send({error:"Not Allowed"})
    }

    // activity = await Activity.findByIdAndUpdate(req.params.id,{$set:{question: req.body.question}},{new:true})
   activity= await Activity.updateOne({_id:req.params.id},
        {$push: 
            {questions:req.body.questions}
        });

    res.json(activity)

    // res.json({success:"Question Done !"});
}
catch(error){
    console.error(error.message);
    res.status(400).json({error:"Not signed up"})
}
})

//delete data from mongo db array
router.delete('/deletedata/:id',fetchuser, async (req,res) => {
try{
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"No such user with this email ID exists."});
    }
    
    let activity = await Activity.findById(req.params.id);
        //    console.log(activity)
    if(!activity){
     return   res.status(401).send({error:"Data not found"})
    }
    if(activity.user.toString() !== req.user.id ){
     return   res.status(401).send({error:"Not Allowed"})
    }

    // activity = await Activity.findByIdAndUpdate(req.params.id,{$set:{question: req.body.question}},{new:true})
   activity= await Activity.updateOne({_id:req.params.id},
        {$pull: 
            {questions:req.body.questions}
        });

    res.json(activity)

    // res.json({success:"Question Done !"});
}
catch(error){
    console.error(error.message);
    res.status(400).json({error:"Not signed up"})
}
})

// get a particular user
router.get('/getdata',fetchuser, async (req,res)=>{

    try{
    const user = await Activity.findOne({user:req.user.id});
    res.json({email:user.email,questions:user.questions});

    }
    catch(error){
        res.status(400).json({error:"Error in fetching Data"})
    }
})

module.exports = router;
