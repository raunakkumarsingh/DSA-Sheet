require('dotenv').config();
var config={
    service: 'gmail',
    auth: {
    user: process.env.user,
    pass: process.env.pass
    }
  }


  module.exports=config