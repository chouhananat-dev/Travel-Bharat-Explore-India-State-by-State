const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import models
const State = require('./models/State');
const Place = require('./models/Place');
const TopPlaces = require('./models/Top_Places');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.error("Connection failed:", err);
        process.exit(1);
    });

async function seedDatabase() {
    try {
        // Clear existing data
        await State.deleteMany({});
        await Place.deleteMany({});
        await TopPlaces.deleteMany({});
        console.log("Cleared existing data");

        // Read JSON files
        const statesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'Data', 'states.json'), 'utf-8'));
        const placesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'Data', 'places.json'), 'utf-8'));
        const topPlacesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'Data', 'topplaces.json'), 'utf-8'));

        // Insert States - transform data to match schema
        const statesTransformed = statesData.map(state => ({
            name: state.name,
            type: state.type,
            image: state.image,
            tagLine: state.tagLine
        }));
        await State.insertMany(statesTransformed);
        console.log(`✓ Inserted ${statesTransformed.length} states`);

        // Insert Places - transform data to match schema
        const placesTransformed = placesData.map(place => ({
            name: place.name,
            state: place.state,
            keyPoints: place.keyPoints,
            category: place.category,
            description: place.description,
            bestTimeToVisit: place.bestTimeToVisit,
            image: place.image,
            map: place.map,
            nearByAttractions: place.nearByAttractions.map(attr => ({
                name: attr.place || attr.name || "Nearby Attraction",
                description: attr.description,
                image: attr.image || "https://res.cloudinary.com/degxzalkz/image/upload/v1775662861/photo-1678617898157-feeeb4997ca6_dv8nmy.jpg"
            }))
        }));
        await Place.insertMany(placesTransformed);
        console.log(`✓ Inserted ${placesTransformed.length} places`);

        // Insert Top Places - transform data to match schema
        const topPlacesTransformed = topPlacesData.map(place => ({
            place: place.place,
            state: place.state,
            real_name: place.real_name,
            description: place.description,
            tagline: place.tagline,
            image: place.image
        }));
        await TopPlaces.insertMany(topPlacesTransformed);
        console.log(`✓ Inserted ${topPlacesTransformed.length} top places`);

        console.log("\n✅ Database seeded successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Error seeding database:", err);
        process.exit(1);
    }
}

seedDatabase();
