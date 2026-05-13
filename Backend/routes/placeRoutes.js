const express = require('express');
const router = express.Router();
const Place = require('../models/Place');
const protect = require('../Middlewares/tokenVerifier');

// imported the model of Place to interact with the database

router.get('/getStatesInfo',async(req,res)=>{
    try{
        const statename=req.query?.statename;
        const category=req.query?.category;
        const statesinfo = await Place.find({$or:[{state:statename},{category:category}]});
        res.json(statesinfo);    
    }
    catch{
        res.status(500).json({error:"internal server error!"});
    }
});

router.get('/states/:statename',async (req,res)=>{
    const statename = req.params?.statename;
    try{
        const stateInfo = await Place.find({state:statename});
        res.json(stateInfo);
    }
    catch(err){
        res.status(500).json(`Server error ${err}`);
    }
})
router.get('/getStatesInfoByAdmin',protect ,async(req,res)=>{
    try{
        const statename=req.query?.statename;
        const category=req.query?.category;
        const statesinfo = await Place.find({$or:[{state:statename},{category:category}]});
        res.json(statesinfo);    
    }
    catch{
        res.status(500).json({error:"internal server error!"});
    }
});

router.post('/savedata',protect, async(req,res)=>{
    const {name, state, category, description, bestTimeToVisit, image, map, nearByAttractions, keyPoints } = req.body;
    try{
        const newPlace = new Place({
            name,
            state,
            keyPoints,
            description,
            bestTimeToVisit,
            image,
            map,
            nearByAttractions
        })
        const savedPlace = newPlace.save();
        res.status(200).json(savedPlace);
    }
    catch(err){
        res.status(400).json(err);
    }
})
module.exports = router;
