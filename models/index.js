const Division = require('./Division');
const Format = require('./Format');
const Match = require('./Match');
const Participant = require('./Participant');
const Profile = require('./Profile');
const Tournament = require('./Tournament');
const User = require('./User');
const WeightIndex = require('./WeightIndex');

User.hasOne(Profile);
Profile.belongsTo(User);

Profile.hasOne(Participant);
Participant.belongsTo(Profile);

Tournament.hasMany(Participant);
Participant.belongsTo(Tournament);

Tournament.hasOne(WeightIndex);
WeightIndex.belongsTo(Tournament);

Tournament.hasMany(Division);
Division.belongsTo(Tournament);

Division.hasMany(Participant);
Participant.belongsTo(Division);

// Division.hasOne(WeightIndex);
// WeightIndex.belongsTo(Division);

// Division.hasMany(Match);
// Match.belongsTo(Division);

// Profile.hasMany(Match);
// Match.belongsToMany(Profile);

Format.hasMany(Division);
Division.belongsTo(Format);


module.exports = {
    Division,
    Format,
    Match,
    Participant,
    Profile,
    Tournament,
    User,
    WeightIndex,
}