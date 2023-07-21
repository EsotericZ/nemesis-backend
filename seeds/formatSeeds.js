const { Format } = require('../models');

const formatData = [
    {
        id: 8001,
        name: 'Pool Play',
        // DivisionId: 5001,
    },
    {
        id: 8002,
        name: 'Single Elimination',
        // DivisionId: 5002,
    },
]

const seedFormats = () => Format.bulkCreate(formatData);

module.exports = seedFormats;