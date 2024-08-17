const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codingidsSchema = new Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true 
   },
   leetcodeID: {
      username: { type: String },
      details: { type: mongoose.Schema.Types.Mixed, required: false },
      required: false 
   },
   codeforcesID: {
      username: { type: String, required: false },
      details: { type: mongoose.Schema.Types.Mixed, required: false },
      required: false   
   },
   codechefID: {
      username: { type: String, required: false },
      details: { type: mongoose.Schema.Types.Mixed, required: false },
      required: false   
   },
   gfgID: {
      username: { type: String, required: false },
      details: { type: mongoose.Schema.Types.Mixed, required: false },
      required: false  
   }
});

module.exports = mongoose.model('CodingIds', codingidsSchema);
