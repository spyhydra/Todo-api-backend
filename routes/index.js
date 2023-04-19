const express=require('express')
const app=express();
const router = express.Router()
const index_controller=require('../controllers/index_Controller')



router.get('/',index_controller.home);
router.use('/users',require('./user'));


module.exports=router;