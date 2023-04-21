const express = require('express')
const app = express();
const router = express.Router()


router.use('/users', require('./user'));
router.use('/tasks', require('./tasks'));


module.exports = router;