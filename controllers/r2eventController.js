const R2Event = require('../models/R2Event');

const createR2Event = async (req, res) => {
    // const newR2Event = req.body.newR2Event;
    // console.log(newR2Event);
    let event = {
        eventName: 'test'
    }

    try {
        await R2Event.create(event)
        console.log('event created')
        res.status(201).json({ 'success': 'Event Created' })
    } catch (err) {
        console.log('event failed')
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    createR2Event,
}