const express=require('express')
const app=express();
const router = express.Router()
const user_Controller=require('../controllers/user_controller')




router.post('/register',user_Controller.user);




module.exports=router;