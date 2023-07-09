const { Division } = require('../models');

const divisionData = [
    {
        id: 5001,
        name: 'Open Singles',
        TournamentId: 3001,
    },
    {
        id: 5002,
        name: 'A Singles',
        TournamentId: 3001,
    },
    {
        id: 5003,
        name: 'B/C Singles',
        TournamentId: 3001,
    },
    {
        id: 5004,
        name: 'Open Doubles',
        TournamentId: 3001,
    },
    {
        id: 5005,
        name: 'A/B Doubles',
        TournamentId: 3001,
    },
]

const seedDivisions = () => Division.bulkCreate(divisionData);

module.exports = seedDivisions;