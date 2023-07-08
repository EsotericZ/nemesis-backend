const Division = require('./Division');
const Match = require('./Match');
const Profile = require('./Profile');
const Tournament = require('./Tournament');
const User = require('./User');
const UserTournament = require('./UserTournament');
const WeightIndex = require('./WeightIndex');

User.hasOne(Profile);
Profile.belongsTo(User);

Profile.hasMany(Tournament);
Tournament.belongsToMany(Profile, {through: UserTournament});

Tournament.hasOne(WeightIndex);
WeightIndex.belongsTo(Tournament);

// Tournament.hasMany(Division);
// Division.belongsTo(Tournament);

// Division.hasOne(WeightIndex);
// WeightIndex.belongsTo(Division);

// Division.hasMany(Match);
// Match.belongsTo(Division);

// Profile.hasMany(Match);
// Match.belongsToMany(Profile);

module.exports = {
    Division,    
    Match,
    Profile,
    Tournament,
    User,
    WeightIndex,
}