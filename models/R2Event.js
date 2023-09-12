const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const r2eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    club: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    director: {
        type: String,
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
    eventURL: {
        type: String,
    }
});

module.exports = mongoose.model('R2Event', r2eventSchema);