const Division = require('./Division');
const Match = require('./Match');
const Profile = require('./Profile');
const Tournament = require('./Tournament');
const User = require('./User');
const WeightIndex = require('./WeightIndex');

User.hasOne(Profile);
Profile.belongsTo(User);

Profile.hasMany(Tournament);
Tournament.belongsToMany(Profile);

Tournament.hasOne(WeightIndex);
WeightIndex.belongsToMany(Tournament);

Tournament.hasMany(Division);
Division.belongsToMany(Tournament);

Division.hasOne(WeightIndex);
WeightIndex.belongsToMany(Division);

Division.hasMany(Match);
Match.belongsTo(Division);

Profile.hasMany(Match);
Match.belongsToMany(Profile);

module.exports = {
    Division,    
    Match,
    Profile,
    Tournament,
    User,
    WeightIndex,
}