const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/index');

class Division extends Model {};

Division.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        tableName: 'divisions',
        modelName: 'Division',
        timestamps: false,
    }
);

module.exports = Division;