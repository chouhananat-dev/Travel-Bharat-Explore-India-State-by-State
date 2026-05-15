const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const admin = require('../models/Admin');
require('dotenv').config();

router.post('/login', async(req,res)=>{
    const {username,password} = req.body
    try{
        const admingot = await admin.findOne({username:username});
        if(!admingot){
            return res.status(401).json("Invalid credentials");
        }
        const ismatch = await bcrypt.compare(password, admingot.password);
        if(!ismatch){
            return res.status(401).json("Invalid credentials");
        }
        const token = jwt.sign({id:admingot._id},process.env.JWT_SECRET,{expiresIn:'24h'});
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