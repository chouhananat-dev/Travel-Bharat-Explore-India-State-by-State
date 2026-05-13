const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const admin = require('../models/Admin');
require('dotenv').config();

router.post('/login',async (req,res)=>{
    const {username,password} = req.body
    try{
        const admin = await admin.findOne({username:username});
        if(!admin){
            return res.status(401).json("Invalid credentials");
        }
        const ismatch = await bcrypt.compare(password, admin.password);
        if(!ismatch){
            return res.status(401).json("Invalid credentials");
        }
        const token = await jwt.sign({id:admin._id},process.env.jwt_token,{expiresIn:'24h'});
        res.json({
            message:"token created successfully",
            token:token
        })
    }
    catch(err){
        res.status(500).json(`Internal server error: ${err}`);
    }
});
module.exports = router;