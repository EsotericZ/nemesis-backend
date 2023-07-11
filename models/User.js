const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/index');

class User extends Model {};

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            // unique: true,
            // allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'player',
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User',
        timestamps: false,
    }
);

module.exports = User;