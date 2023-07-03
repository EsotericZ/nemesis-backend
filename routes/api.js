const router = require('express').Router();

const portalRoutes = require('./portalRoutes');
const userRoutes = require('./userRoutes');

router.get('/', (req, res) => {
    res.send('Connected to the API');
});

router.use('/users', userRoutes);
router.use('/portal', portalRoutes);

module.exports = router;