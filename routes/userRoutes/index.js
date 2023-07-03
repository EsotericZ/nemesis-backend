const router = require('express').Router();
const userController = require('../../controllers/userController');
const verify = require('../../middleware/verifyJWT');

router.get('/getAllUsers', verify, userController.getAllUsers);
router.post('/getSocialEmail', userController.getSocialEmail);

module.exports = router;