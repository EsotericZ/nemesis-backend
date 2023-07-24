const router = require('express').Router();
const portalController = require('../../controllers/portalController');

router.post('/getSocialEmail', portalController.getSocialEmail);
router.post('/login', portalController.login);
router.post('/refresh', portalController.refreshToken);

module.exports = router;