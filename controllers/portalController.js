const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

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

const logout = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    const refreshToken = cookies.jwt;

    const userFound = await User.findOne({ refreshToken }).exec();
    if (userFound) {
        res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'None'})
        return res.sendStatus(204);
    }

    userFound.refreshToken = '';
    await userFound.save();

    res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'None'});
    res.sendStatus(204);
}

const refreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const userFound = await User.findOne({ refreshToken }).exec();
    if (!userFound) return res.sendStatus(403);
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || userFound.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(userFound.roles);
            const accessToken = jwt.sign(
                {
                    "userInfo": {
                        "email": decoded.email,
                        "roles": roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            );
            res.json({ roles, accessToken })
        }
    );
}

const register = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'email and password are required.' });

    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            "email": email,
            "password": hashedPassword
        });
        res.status(201).json({ 'success': `${email} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    login,
    logout,
    refreshToken,
    register,
}