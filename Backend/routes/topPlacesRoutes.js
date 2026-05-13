const express = require('express');
const router = express.Router();
const topPlaces = require('../models/Top_Places');

router.get('/topPlaces',async(req,res)=>{
    try{
        const topPlacesData = await topPlaces.find();
        res.json(topPlacesData);
    }
    catch(err){
        res.status(500).json(`Server error ${err}`);
    }
});

module.exports = router;