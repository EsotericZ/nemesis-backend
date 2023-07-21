const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/index');

class Format extends Model {};

Format.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        games: {
            type: DataTypes.INTEGER,
            defaultValue: 3,
        },
        totalPoints: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        gameLimit: {
            type: DataTypes.INTEGER,
            defaultValue: 15,
        },
        timeouts: {
            type: DataTypes.INTEGER,
            defaultValue: 3,
        },
        tieBreaker: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        tieBreakLimit: {
            type: DataTypes.INTEGER,
            defaultValue: 11,
        },
        tieBreakTimeouts: {
            type: DataTypes.INTEGER,
            defaultValue: 2,
        },
    }, {
        sequelize,
        tableName: 'formats',
        modelName: 'Format',
        timestamps: false,
    }
);

module.exports = Format;