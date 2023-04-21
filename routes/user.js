const express = require('express')
const app = express();
const router = express.Router()
const user_Controller = require('../controllers/user_controller')
const passport = require('passport')


router.post('/register', passport.authenticate('jwt', {session: false}), user_Controller.user);
router.get('/login', user_Controller.login);
router.get('/createtoken', user_Controller.createSession);


module.exports = router;