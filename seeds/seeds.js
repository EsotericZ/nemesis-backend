const mongoose = require('mongoose');
require('dotenv').config({path:__dirname+'/./../.env'});

const Division = require('../models/Division');

const seedDivisions = require('./divisionSeeds');

mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log('Database Connected')
    console.log('\n----- DATABASE CONNECTED -----\n');
})
.catch((error) => {
    console.log(error)
})

const seedDB = async () => {
    await Division.deleteMany({});
    await Division.insertMany(seedDivisions);
    console.log('\n----- DIVISIONS SEEDED -----\n');
};

seedDB().then(() => {
    console.log('\n----- DATABASE SEEDED -----\n');
    mongoose.connection.close();
})