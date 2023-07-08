const seedUsers = require('./userSeeds');
const seedProfiles = require('./profileSeeds');
const seedTournaments = require('./tournamentSeeds');

const { UserTournament } = require('../models');
const { Division } = require('../models');
const { Match } = require('../models');
const { WeightIndex } = require('../models');

const sequelize = require('../config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedProfiles();
    console.log('\n----- PROFILES SEEDED -----\n');

    await seedTournaments();
    console.log('\n----- TOURNAMENTS SEEDED -----\n');

    process.exit(0);
}

seedAll();