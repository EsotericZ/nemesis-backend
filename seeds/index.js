const seedUsers = require('./userSeeds');
const seedProfiles = require('./profileSeeds');

const sequelize = require('../config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedProfiles();
    console.log('\n----- PROFILES SEEDED -----\n');

    process.exit(0);
}

seedAll();