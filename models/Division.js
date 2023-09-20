const mongoose = require('mongoose');
const { Schema } = mongoose;

const divisionSchema = new Schema({
    divisionName: {
        type: String,
        required: true,
    },
    weightIndex: {
        type: Schema.Types.ObjectId,
        ref: 'WeightIndex',
        required: true,
    }
})

module.exports = mongoose.model('Division', divisionSchema);