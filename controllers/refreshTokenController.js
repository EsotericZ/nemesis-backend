const jwt = require('jsonwebtoken');
const portalController = require('./portalController');
require('dotenv').config();

const handleRefreshToken = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.status(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
}


// FINISH THIS - MOVE TO THE portalController