const { Profile, User } = require('../models');

async function getAllUsers(req, res) {
    await User.findAll({
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

async function getSocialEmail(req, res) {
    let email = req.body.email
    await User.findOne({
        where: { email: email}
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

module.exports = {
    getAllUsers,
    getSocialEmail,
}