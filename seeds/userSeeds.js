const { User } = require('../models');
const CryptoJS = require('crypto-js');

require('dotenv').config();

let encryptedPassword = CryptoJS.AES.encrypt(
    'password',
    process.env.SECRET_KEY || '1234'
).toString();

const userData = [
    {
        id: 9999,
        email: 'cjsand03z@gmail.com',
        password: encryptedPassword,
        role: 'admin',
        active: true,
    },
    {
        id: 1001,
        email: 'cj@cj.com',
        password: encryptedPassword,
        role: 'player',
        active: true,
    },
    {
        id: 1002,
        email: 'v@v.com',
        password: encryptedPassword,
        role: 'player',
        active: true,
    },
    {
        id: 1003,
        email: 'n@n.com',
        password: encryptedPassword,
        role: 'player',
        active: true,
    },
    {
        id: 1004,
        email: 'c@c.com',
        password: encryptedPassword,
        role: 'player',
        active: true,
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;