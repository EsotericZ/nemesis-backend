const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/index');

class WeightIndex extends Model {};

WeightIndex.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        tableName: 'weightIndex',
        modelName: 'WeightIndex',
    }
);

module.exports = WeightIndex;