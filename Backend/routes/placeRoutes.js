const express = require('express');
const router = express.Router();
const Place = require('../models/Place');
const {protect} = require('../Middlewares/tokenVerifier');

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
});
router.get('/adminUpdate/:objectId',protect, async(req,res)=>{
    const {objectId}=req.params;
    try{
        const place = await Place.findOne({_id:objectId});
        res.json(place);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.put('/makeUpdate/:objectId',protect, async(req,res)=>{
    const {objectId} = req.params;
    const {name, state, category, description, bestTimeToVisit, image, map, keyPoints, nearByAttractions} = req.body;
    try{
        const updated = await Place.findByIdAndUpdate(objectId,{},{new:true, runValidators:true});
        if(!updated){
            res.status(404).json({message:"object not found!"});
        }
        else{
            res.status(200).json("updated successfully");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
