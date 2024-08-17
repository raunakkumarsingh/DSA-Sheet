const express = require('express')
const User=require('../Models/usermodel')
const ActivityDSA = require('../Models/activityModelDSA')
const ActivityFaraj = require('../Models/activityModelSFaraj')
const ActivityStriver = require('../Models/activityModelStriver')
const fetchuser = require('../Middleware/fetch')

const router = express.Router()
 
// add question to  FARAJ array
router.post('/updatedata/faraj/:id',fetchuser, async (req,res) => {
try{
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"No such user with this email ID exists."});
    }
    let activity = await ActivityFaraj.findById(req.params.id);
        //    console.log(activity)
    if(!activity){
     return   res.status(401).send({error:"Data not found"})
    }
    if(activity.user.toString() !== req.user.id ){
     return   res.status(401).send({error:"Not Allowed"})
    }

    // activity = await Activity.findByIdAndUpdate(req.params.id,{$set:{question: req.body.question}},{new:true})
   activity= await ActivityFaraj.updateOne({_id:req.params.id},
    {$push: 
        {faraj:req.body.questions}
    });

    res.json(activity)

    // res.json({success:"Question Done !"});
}
catch(error){
    console.error(error.message);
    res.status(400).json({error:"Not signed up"})
}
})
// add question to Striver array
router.post('/updatedata/striver/:id',fetchuser, async (req,res) => {
try{
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"No such user with this email ID exists."});
    }
    let activity = await ActivityStriver.findById(req.params.id);
        //    console.log(activity)
    if(!activity){
     return   res.status(401).send({error:"Data not found"})
    }
    if(activity.user.toString() !== req.user.id ){
     return   res.status(401).send({error:"Not Allowed"})
    }

    // activity = await Activity.findByIdAndUpdate(req.params.id,{$set:{question: req.body.question}},{new:true})
   activity= await ActivityStriver.updateOne({_id:req.params.id},
    {$push: 
        {striver:req.body.questions}
    });

    res.json(activity)

    // res.json({success:"Question Done !"});
}
catch(error){
    console.error(error.message);
    res.status(400).json({error:"Not signed up"})
}
})
router.post('/updatedata/striver/:id',fetchuser, async (req,res) => {
try{
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"No such user with this email ID exists."});
    }
    let activity = await ActivityStriver.findById(req.params.id);
        //    console.log(activity)
    if(!activity){
     return   res.status(401).send({error:"Data not found"})
    }
    if(activity.user.toString() !== req.user.id ){
     return   res.status(401).send({error:"Not Allowed"})
    }

    // activity = await Activity.findByIdAndUpdate(req.params.id,{$set:{question: req.body.question}},{new:true})
   activity= await ActivityStriver.updateOne({_id:req.params.id},
    {$push: 
        {striver:req.body.questions}
    });

    res.json(activity)

    // res.json({success:"Question Done !"});
}
catch(error){
    console.error(error.message);
    res.status(400).json({error:"Not signed up"})
}
})
// add data in Love DSA
router.post('/updatedata/dsa/:id',fetchuser, async (req,res) => {
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
    {$push: 
        {love:req.body.questions}
    },
    {}
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
    res.json(user);
    }
    catch(error){
        res.status(400).json({error:"Error in fetching Data"})
    }
})

module.exports = router;
