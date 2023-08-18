// const { Model, DataTypes, UUIDV4 } = require('sequelize');
// const sequelize = require('../config/index');

// class Profile extends Model {};

// Profile.init(
//     {
//         id: {
//             type: DataTypes.UUID,
//             defaultValue: UUIDV4,
//             primaryKey: true,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         singleRank: {
//             type: DataTypes.INTEGER,
//         },
//         doubleRank: {
//             type: DataTypes.INTEGER,
//         },
//     }, {
//         sequelize,
//         tableName: 'profiles',
//         modelName: 'Profile',
//         timestamps: false,
//     }
// );

// module.exports = Profile;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    singleRank: {
        type: Number,
    },
    doubleRank: {
        type: Number,
    },
    mixRank: {
        type: Number,
    },
});

module.exports = mongoose.model('Profile', profileSchema);