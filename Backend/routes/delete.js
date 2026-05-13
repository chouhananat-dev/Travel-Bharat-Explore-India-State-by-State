const Place = require('../models/Place');
const protect = require('../Middlewares/tokenVerifier');
const express = require('express');
const router = express.Router();

router.post('/deletePlace', protect, async(req,res)=>{
    const {placeId} = req.body
    try{
        const message = await Place.deleteOne({_id: placeId});
        res.status(200).json(message);
    }
    catch(err){
        res.status(500).json(err)
    }
});
module.exports = router;