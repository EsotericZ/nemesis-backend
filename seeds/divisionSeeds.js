const { Division } = require('../models');

const divisionData = [
    {
        id: 5001,
        name: 'Open Singles',
        TournamentId: 4001,
        FormatId: 8001,
    },
    {
        id: 5002,
        name: 'A Singles',
        TournamentId: 4001,
    },
    {
        id: 5003,
        name: 'B Singles',
        TournamentId: 4001,
    },
    {
        id: 5004,
        name: 'C Singles',
        TournamentId: 4001,
    },
    {
        id: 5005,
        name: 'Open Doubles',
        TournamentId: 4001,
    },
    {
        id: 5006,
        name: 'A Doubles',
        TournamentId: 4001,
    },
    {
        id: 5007,
        name: 'B Doubles',
        TournamentId: 4001,
    },
]

const seedDivisions = () => Division.bulkCreate(divisionData);

module.exports = seedDivisions;