const { Profile } = require('../models');

const profileData = [
    {
        name: 'CJ Sanders',
        UserId: 123,
    },
    {
        name: 'Test Player',
        UserId: 456,
    },
]

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;