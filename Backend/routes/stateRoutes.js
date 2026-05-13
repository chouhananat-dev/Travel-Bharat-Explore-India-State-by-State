const express = require('express');
const router = express.Router();
const State = require('../models/State');

router.get('/statesList',async(req,res)=>{
    try{
        const stateData = await State.find();
        res.json(stateData);
    }
    catch(err){
        res.status(500).json(`Server error ${err}`);
    }
});

module.exports = router;

