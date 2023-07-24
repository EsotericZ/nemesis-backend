const { Profile, User } = require('../models');

const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");
require('dotenv').config();

async function getSocialEmail(req, res) {
    let email = req.body.email
    await User.findOne({
        where: { email: email},
        include: [{
            model: Profile,
        }]
    })
    .then((results) => {
        return res.status(200).send({
            data: results
        })
    }).catch((err) => {
        return res.status(500).send({
            status: err
        })
    })
}

async function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let roles = ['player'];
    console.log('hit')

    const userInfo = await User.findOne({
        where: { email: email},
        include: [{
            model: Profile,
        }]
    });

    if (userInfo.role == 'admin') {
        roles.push('admin')
    }

    if (!userInfo) {
        return res.status(405).json({
            status: 'error',
            description: 'User Does Not Exist'
        });
    } else {
        const bytes = CryptoJS.AES.decrypt(
            userInfo.password,
            process.env.SECRET_KEY || '1234'
        );
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
        if (decryptedPassword === password) {
            const accessToken = jwt.sign(
                { "email": userInfo.email},
                process.env.JWT_ACCESS_SECRET_KEY || '5678',
                { expiresIn: '30m' }
            )
            const refreshToken = jwt.sign(
                { "email": userInfo.email },
                process.env.JWT_REFRESH_SECRET_KEY || '9012',
                { expiresIn: '7d' }
            );
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24*60*60*1000 });
            return res.status(200).json({
                status: 'success',
                accessToken: accessToken,
                roles: roles,
            });
        } else {
            return res.status(405).json({
                status: 'error',
                description: 'Failed to Login'
            });
        }
    }
}

const refreshToken = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    console.log('hit')
    // const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    // if (!foundUser) return res.sendStatus(403); //Forbidden 
    // // evaluate jwt 
    // jwt.verify(
    //     refreshToken,
    //     process.env.REFRESH_TOKEN_SECRET,
    //     (err, decoded) => {
    //         if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
    //         const accessToken = jwt.sign(
    //             { "username": decoded.username },
    //             process.env.ACCESS_TOKEN_SECRET,
    //             { expiresIn: '30s' }
    //         );
    //         res.json({ accessToken })
    //     }
    // );
}

module.exports = {
    getSocialEmail,
    login,
    refreshToken,
}