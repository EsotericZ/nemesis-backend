const { Format } = require('../models');

const getAllFormats = async (req, res) => {
    const formats = await Format.findAll();
    res.json(formats)
}

module.exports = {
    getAllFormats,
}