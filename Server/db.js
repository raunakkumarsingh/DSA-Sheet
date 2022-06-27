
const mongoose =require('mongoose');
require('dotenv').config()

// const mongo_URI=process.env.mongo_URI
const mongo_URI="mongodb://localhost:27017/Faraj?directConnection=true"

   
const connectToMongo=()=>{
    mongoose.connect(mongo_URI, ()=>{
        console.log("Connect with mongo successfull");
    })
}

module.exports=connectToMongo