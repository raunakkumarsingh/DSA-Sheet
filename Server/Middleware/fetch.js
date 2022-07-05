var jwt = require('jsonwebtoken');
const secureKey="#R4UN4K#J4SM1N#"


const fetchuser=(req,res,next)=>{
     
        const token =req.header('auth-token')

        if(!token){
            res.status(401).json({error:"Authenticate using a valid Token"})
            res.redirect('/login')
        }

        try {

            const data= jwt.verify(token, secureKey);
            req.user=data.user;
            next()
            
        } catch (error) {
            res.status(401).json({error:"Authenticate using a valid Token"})
        }
        
  }

 module.exports=fetchuser;