// const { Profile, User } = require('../models');
const User = require('../models/User');

const getAllUsers = async (req, res) => {
    console.log('hit!!')
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

// async function getSocialEmail(req, res) {
//     let email = req.body.email
//     await User.findOne({
//         where: { email: email}
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

module.exports = {
    getAllUsers,
    // getSocialEmail,
}