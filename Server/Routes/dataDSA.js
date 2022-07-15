const express = require('express')
const User=require('../Models/usermodel')
const ActivityDSA = require('../Models/activityModelDSA')
const fetchuser = require('../Middleware/fetch')
const { findByIdAndUpdate} = require('../Models/activityModelDSA')
const router = express.Router()


// add data in Love DSA
router.post('/updatedata/:id',fetchuser, async (req,res) => {
try{
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"No such user with this email ID exists."});
    }
    let activity = await ActivityDSA.findById(req.params.id);
        //    console.log(activity)
    if(!activity){
     return   res.status(401).send({error:"Data not found"})
    }
    if(activity.user.toString() !== req.user.id ){
     return   res.status(401).send({error:"Not Allowed"})
    }
     let type =req.body.type;
    activity = await ActivityDSA.findByIdAndUpdate(req.params.id,{$set:{Array: req.body.Array}},{new:true})
   activity= await ActivityDSA.updateOne({_id:req.params.id},
    {$push: 
        {love:req.body.love}
    },
    );

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
    
    let activity = await ActivityDSA.findById(req.params.id);
        //    console.log(activity)
    if(!activity){
     return   res.status(401).send({error:"Data not found"})
    }
    if(activity.user.toString() !== req.user.id ){
     return   res.status(401).send({error:"Not Allowed"})
    }

    // activity = await Activity.findByIdAndUpdate(req.params.id,{$set:{question: req.body.question}},{new:true})
   activity= await ActivityDSA.updateOne({_id:req.params.id},
        {$pull: 
            {love:req.body.love}
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
    const user = await ActivityDSA.findOne({user:req.user.id});
    res.json(user);
    }
    catch(error){
        res.status(400).json({error:"Error in fetching Data"})
    }
})

module.exports = router;
