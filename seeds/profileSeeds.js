const { Profile } = require('../models');

const profileData = [
    {
        id: 2001,
        name: 'CJ Sanders',
        UserId: 1001,

    },
    {
        id: 2002,
        name: 'Victor',
        UserId: 1002,
    },
    {
        id: 2003,
        name: 'Nick',
        UserId: 1003,
    },
    {
        id: 2004,
        name: 'Charles',
        UserId: 1004,
    },
]

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;