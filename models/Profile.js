const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/index');

class Profile extends Model {};

Profile.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        singleRank: {
            type: DataTypes.INTEGER,
        },
        doubleRank: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        tableName: 'profiles',
        modelName: 'Profile',
        timestamps: false,
    }
);

module.exports = Profile;