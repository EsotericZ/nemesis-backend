let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('Connected to the API');
});

module.exports = router;