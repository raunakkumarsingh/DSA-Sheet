const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
   email: {
    type: String,
    required: true
   },
   questions: [String]
})
module.exports = mongoose.model('Activity',activitySchema)