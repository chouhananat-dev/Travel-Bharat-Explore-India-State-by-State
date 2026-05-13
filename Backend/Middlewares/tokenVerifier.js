const jwt = require('jsonwebtoken');
require('dotenv').config();
const protect = (req,res,next)=>{
    const reqHeader = req.headers.Authoriaztion;
        if(reqHeader && reqHeader.startWith('Bearer')){
            try{
            const token = reqHeader.split(' ')[1];
            await jwt.verify(token,process.env.jwt_token);
            next();
        }
        catch(err){
            res.status(401).json({message:"No valid token:"});
        }
    }
        else{
            res.status(401).json({message:"No authorization"});
        }
    }
    module.exports = {protect}