const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'user'
    },
   email: {
    type: String,
    required: true
   },
   questions: [{type: Number}]
})
module.exports = mongoose.model('Activity',activitySchema)