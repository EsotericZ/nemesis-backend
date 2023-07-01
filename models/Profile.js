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
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: 'users',
                key: 'id',
            }
        },
    }, {
        sequelize,
        tableName: 'profiles',
        modelName: 'Profile',
    }
);

module.exports = Profile;