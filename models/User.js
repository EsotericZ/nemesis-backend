// const { Model, DataTypes, UUIDV4 } = require('sequelize');
// const sequelize = require('../config/index');

// class User extends Model {};

// User.init(
//     {
//         id: {
//             type: DataTypes.UUID,
//             defaultValue: UUIDV4,
//             primaryKey: true,
//         },
//         email: {
//             type: DataTypes.STRING,
//             // unique: true,
//             // allowNull: false,
//         },
//         password: {
//             type: DataTypes.STRING,
//         },
//         role: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             defaultValue: 'player',
//         },
//         active: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: true,
//         },
//         refreshToken: {
//             type: DataTypes.STRING,
//         },
//     }, {
//         sequelize,
//         tableName: 'users',
//         modelName: 'User',
//         timestamps: false,
//     }
// );

// module.exports = User;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // username: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true
    },
    roles: {
        player: {
            type: Number,
            default: 2001
        },
        director: Number,
        admin: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);