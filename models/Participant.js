const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/index');

class Participant extends Model {};

Participant.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
    }, {
        sequelize,
        tableName: 'participants',
        modelName: 'Participant',
        timestamps: false,
    }
);

module.exports = Participant;