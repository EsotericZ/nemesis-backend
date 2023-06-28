const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.get('/', (req, res) => {
    res.send('Connected to the API');
});

router.use('/users', userRoutes);

module.exports = router;