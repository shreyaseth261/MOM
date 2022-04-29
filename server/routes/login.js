const express= require("express")
const router=express.Router();
const loginController=require("../controller/loginController")

//login user
router.post('/',loginController.login);

module.exports=router;