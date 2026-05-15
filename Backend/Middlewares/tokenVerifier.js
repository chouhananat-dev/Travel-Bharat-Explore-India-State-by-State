const jwt = require('jsonwebtoken');
require('dotenv').config();
const protect = async(req,res,next)=>{
    const reqHeader = req.headers.authorization;
        if(reqHeader && reqHeader.startsWith('Bearer')){
            try{
            const token = reqHeader.split(' ')[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
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