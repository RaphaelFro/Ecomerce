const express = require('express');
const router = express.Router();

const auth = require('../Middleware/auth');

const userCtrl = require('../Controller/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/getAllUsers', auth, userCtrl.getAllUser);
router.get('/getOneUser/:userId', auth, userCtrl.getOneUser);
router.modify('/update', auth, userCtrl.update);
router.delete('/delete', auth, userCtrl.delete);

module.exports = router;