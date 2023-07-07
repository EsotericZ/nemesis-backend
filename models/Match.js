const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/index');

class Match extends Model {};

Match.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
    }, {
        sequelize,
        tableName: 'matches',
        modelName: 'Match',
    }
);

module.exports = Match;