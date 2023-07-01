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

module.exports = {
    getAllUsers: getAllUsers,
}