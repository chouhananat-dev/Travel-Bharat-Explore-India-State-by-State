const moongose = require('mongoose');

const topPlacesSchema =new moongose.Schema({
    place:{type:String, required:true},
    state:{type:String, required:true},
    real_name:{type:String, required:true},
    description:{type:String, required:true},
    tagline:{type:String, required:true},
    image:{type:String, required:true}
});

module.exports = moongose.model('topPlaces',topPlacesSchema,'top_places');