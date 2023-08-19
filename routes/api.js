const router = require('express').Router();
const verifyJWT = require('../middleware/verifyJWT');

const eventRoutes = require('./eventRoutes');
const portalRoutes = require('./portalRoutes');
const userRoutes = require('./userRoutes');

router.use('/portal', portalRoutes);

router.use(verifyJWT);
router.use('/events', eventRoutes);
router.use('/users', userRoutes);

module.exports = router;