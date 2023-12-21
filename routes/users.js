const router = require('express').Router();
const { myInfo, updateProfile } = require('../controllers/users');
const { validationUpdateUser } = require('../middlewares/validator');

router.get('/me', myInfo);
router.patch('/me', validationUpdateUser, updateProfile);

module.exports = router;
