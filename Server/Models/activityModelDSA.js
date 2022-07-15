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
    Array:{
      type: Number,
    },
    Matrix:{
      type: Number,
    },
    String:{
      type: Number,
    },
    Search:{
      type: Number,
    },
    Linked:{
      type: Number,
    },
    Binary:{
      type: Number,
    },
    BST:{
      type: Number,
    },
    Greedy:{
      type: Number,
    },
    Backtracking:{
      type: Number,
    },
    Stack:{
      type: Number,
    },
    Heap:{
      type: Number,
    },
    Graph:{
      type: Number,
    },
    Trie:{
      type: Number,
    },
    Dynamic:{
      type: Number,
    },
    Bit:{
      type: Number,
    },
   love: [{type: Number}]
})
module.exports = mongoose.model('ActivityDSA',activitySchema)