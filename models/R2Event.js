const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const r2eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    director: {
        type: String,
    },
    club: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    status: {
        type: String,
        default: 'future',
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    }
});

module.exports = mongoose.model('R2Event', r2eventSchema);