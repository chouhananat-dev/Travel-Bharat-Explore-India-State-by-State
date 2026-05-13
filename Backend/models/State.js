const moongose = require('mongoose');

const stateSchema = new moongose.Schema({
    name:{type:String, required:true},
    type:{type:String, required:true},
    image:{type:String, required:true},
    tagLine:{type:String, required:true}
});

module.exports = moongose.model('State',stateSchema,'states');