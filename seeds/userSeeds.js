const { User } = require('../models');
const CryptoJS = require('crypto-js');

require('dotenv').config();

let encryptedPassword = CryptoJS.AES.encrypt(
    'password',
    process.env.SECRET_KEY || '1234'
).toString();

const userData = [
    {
        id: 123,
        email: 'cjsand03@gmail.com',
        password: encryptedPassword,
        role: 'admin',
        active: true,
    },
    {
        id: 456,
        email: 'z@z.com',
        password: encryptedPassword,
        role: 'player',
        active: true,
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;