const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'user'
    },
   name:{
      type: String,
      required: false
   },
   email: {
    type: String,
    required: false
   },
   
   800: [{ type: Number }],
  900: [{ type: Number }],
  1000: [{ type: Number }],
  1100: [{ type: Number }],
  1200: [{ type: Number }],
  1300: [{ type: Number }],
  1400: [{ type: Number }],
  1500: [{ type: Number }],
  1600: [{ type: Number }],
})
module.exports = mongoose.model('ActivityCpsheet',activitySchema)