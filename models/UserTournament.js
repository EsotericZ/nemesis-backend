const { Model } = require('sequelize');
const sequelize = require('../config/index');

class UserTournament extends Model {};

UserTournament.init(
    {
    }, {
        sequelize,
        tableName: 'userTournaments',
        modelName: 'UserTournament',
    }
);

module.exports = UserTournament;