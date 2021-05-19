// IMPORT THE DB CONNECTION
const mongoose = require('./connection');
// IMPORT THE TWEET MODEL
const Places = require('../models/places');
// IMPORT THE Places JSON DATA
const manyPlaces = require('./seed.json');
// CREATE THE DB CONNECTION
const db = mongoose.connection;
// CREATE ALL Places USING .THEN()
Places.deleteMany({}).then(() => {
    Places.insertMany(manyPlaces).then((places) => {
        console.log('places', places);
        db.close();
    });
});