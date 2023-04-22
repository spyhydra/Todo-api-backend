const express = require('express')
const app = express();
const router = express.Router()
const passport = require('passport')
const task_controller = require('../controllers/task_Controller');

router.post('/task', passport.authenticate('jwt', {session: false}), task_controller.task);
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), task_controller.delete);
router.put('/update/:id', passport.authenticate('jwt', {session: false}), task_controller.update);
router.get('/complete', passport.authenticate('jwt', {session: false}), task_controller.complete);

module.exports = router;