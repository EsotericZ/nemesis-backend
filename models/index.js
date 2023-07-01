const Profile = require('./Profile');
const User = require('./User');

User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = {
    Profile,
    User,
}