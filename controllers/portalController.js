// const { Profile, User } = require('../models');
const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// async function getSocialEmail(req, res) {
//     let email = req.body.email
//     await User.findOne({
//         where: { email: email},
//         include: [{
//             model: Profile,
//         }]
//     })
//     .then((results) => {
//         return res.status(200).send({
//             data: results
//         })
//     }).catch((err) => {
//         return res.status(500).send({
//             status: err
//         })
//     })
// }

const login = async (req, res) => {
    const { email, password } = req.body; 

    const userFound = await User.findOne({ email: email }).exec();
    if (!userFound) return res.sendStatus(401);

    const passwordCheck = await bcrypt.compare(password, userFound.password);
    if (passwordCheck) {
        const roles = Object.values(userFound.roles).filter(Boolean);
        const accessToken = jwt.sign(
            {
                "userInfo": {
                    "email": userFound.email,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10s' }
        );
        const refreshToken = jwt.sign(
            { "email": userFound.email, },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        userFound.refreshToken = refreshToken;
        await userFound.save();
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
        res.json({ roles, accessToken });
    } else {
        res.sendStatus(401);
    }
}

const refreshToken = (req, res) => {
    const cookies = req.cookies;
    console.log('hit')
    console.log(cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    
    const foundUser = User.findOne({
        where: { refreshToken: refreshToken},
    });
    if (!foundUser) return res.sendStatus(403);
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET || '2626',
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "email": decoded.email },
                process.env.ACCESS_TOKEN_SECRET || '1515',
                { expiresIn: '30s' }
            );
            res.json({ accessToken })
        }
    );
}

module.exports = {
    // getSocialEmail,
    login,
    refreshToken,
}