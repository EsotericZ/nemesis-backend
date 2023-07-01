const router = require('express').Router();
const userController = require('../../controllers/userController');
// const verify = require('../../middelware/verifyToken');

// router.get('/getAllUsers', verify, userController.getAllUsers);

router.get('/getAllUsers', userController.getAllUsers);
router.post('/getSocialEmail', userController.getSocialEmail);

module.exports = router;