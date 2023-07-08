const { Profile } = require('../models');

const profileData = [
    {
        name: 'CJ Sanders',
        UserId: 1001,
    },
    {
        name: 'Victor',
        UserId: 1002,
    },
    {
        name: 'Nick',
        UserId: 1003,
    },
    {
        name: 'Charles',
        UserId: 1004,
    },
]

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;