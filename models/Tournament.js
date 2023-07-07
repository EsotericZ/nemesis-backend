const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/index');

class Tournament extends Model {};

Tournament.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        club: {
            type: DataTypes.STRING,
        },
        startDate: {
            type: DataTypes.STRING,
        },
        endDate: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        tableName: 'tournaments',
        modelName: 'Tournament',
    }
);

module.exports = Tournament;