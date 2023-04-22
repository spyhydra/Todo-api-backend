const express = require('express')
const app = express();
const router = express.Router()

const task_controller = require('../controllers/task_Controller');

router.post('/task', task_controller.task);
router.get('/delete/:id', task_controller.delete);
router.put('/update/:id', task_controller.update);
router.get('/complete/:status', task_controller.complete);

module.exports = router;