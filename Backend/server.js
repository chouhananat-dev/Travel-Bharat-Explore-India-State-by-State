const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const moongose = require('mongoose');
require('dotenv').config();
const placesRoutes = require('./routes/placeRoutes');
const stateRoutes = require('./routes/stateRoutes');
const topPlacesRoutes = require('./routes/topPlacesRoutes');
const login = require('./routes/login');
const deletePlace = require('./routes/delete')
app.use(cors());
app.use(express.json());
// connection to mongodb
moongose.connect(process.env.MONGO_URI)
    .then(()=>{console.log("Connection successful!")})
    .catch((err)=>{console.log(err)});

// tell server to use built routes
app.use('/api',placesRoutes);
app.use('/api',stateRoutes);
app.use('/api',topPlacesRoutes);
app.use('/api',login);
app.use('/api',deletePlace);

// app.get("/api/states",(req,res)=>{
//     const filePath = path.join(__dirname,"Data","states.json");
//     fs.readFile(filePath,'utf-8',(err,data)=>{
//         if(err){
//             return res.status(500).json({error:"Failed to read states data"});
//         }
//         return res.json(JSON.parse(data));
//     })
// })

// app.get("/api/topplaces",(req,res)=>{
//     const filePath = path.join(__dirname,"Data","topplaces.json");
//     fs.readFile(filePath,'utf-8',(err,data)=>{
//         if(err){
//             return res.status(500).json({error:"Failed to read top places data"});
//         }
//         return res.json(JSON.parse(data));
//     })
// })

// app.get("/api/states/:statename",(req,res)=>{
//     const statename=req.params.statename;
    
//     const filepath = path.join(__dirname,"Data","places.json");
//     fs.readFile(filepath,'utf-8',(err,data)=>{
//         if(err){
//             return res.status(500).json({error:"Failed to read places data"});
//         }
//         const places = JSON.parse(data);
//         const filteredPlaces = places.filter(place => place.state === statename);
//         return res.json(filteredPlaces);
//     })
// })


// app.get("/api/selectstates",(req,res)=>{
//     // javascript optional chaining is used to safely access query parameters without throwing an error if they are undefined
//     const statename = req.query?.statename;
//     const category = req.query?.category;
//     const filepath=path.join(__dirname,"Data","places.json")
//     fs.readFile(filepath,'utf-8',(err,data)=>{
//         if(err){
//             return res.status(500).json({error:"failed to fetch data"})
//         }
//         let places;
//         try {
//             places = JSON.parse(data)
//         } catch(parseErr) {
//             return res.status(500).json({error:"failed to parse places data"})
//         }
//         if(statename){
//             places = places.filter(place => place.state === statename)
//         }
//         if(category){
//             places = places.filter(place => place.category === category)
//         }
//         return res.json(places);
//     })
// })

app.listen(5000,()=>{
    console.log("Listening at 5000");
})



