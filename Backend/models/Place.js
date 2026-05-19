const moongose = require('mongoose');

// mongoose is a library that allows us to interact with MongoDB in an easier way, it provides a schema-based solution to model our application data.
const placeSchema = new moongose.Schema({
    name: {type: String , required: true},
    state: {type: String , required: true},
    keyPoints: [{type: String , required: true}],
    category: {type: String , required: true},
    description: {type: String , required: true},
    bestTimeToVisit: {type: String , required: true},
    image: {type: String , required: true},
    map:{type: String , required: true},
    nearByAttractions: [{
        name: {type: String , required: true},
        description: {type: String , required: true},
        image: {type: String , required: true}
    }]
});

module.exports = moongose.model('Place',placeSchema,'places');