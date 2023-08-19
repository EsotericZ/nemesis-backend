const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    club: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    divisions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Division',
        }
    ],
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Participant',
        }
    ],
    status: {
        type: String,
        default: 'future',
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model('Event', eventSchema);