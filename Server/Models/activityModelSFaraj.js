const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'user'
    },
   name:{
      type: String,
      required: true
   },
   email: {
    type: String,
    required: true
   },
   
   faraj: [{type: Number}]
})
module.exports = mongoose.model('ActivityFaraj',activitySchema)