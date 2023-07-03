const router = require('express').Router();
const portalController = require('../../controllers/portalController');
// const verify = require('../../middelware/verifyToken');

// router.get('/getAllUsers', verify, userController.getAllUsers);

router.post('/getSocialEmail', portalController.getSocialEmail);
router.post('/login', portalController.login);

module.exports = router;