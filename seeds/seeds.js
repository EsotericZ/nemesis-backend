const mongoose = require('mongoose');
const Division = require('../models/Division');

const seedDivisions = require('./divisionSeeds');

mongoose.connect('mongodb+srv://nemesis:nemesis@cluster0.mflmlug.mongodb.net/NemesisDB?retryWrites=true&w=majority', {
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