const mongoose = require('mongoose');
const { Schema } = mongoose;

const weightIndexSchema = new Schema({
    weightIndexName: {
        type: String,
        required: true,
    },
    weightIndexType: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('WeightIndex', weightIndexSchema);