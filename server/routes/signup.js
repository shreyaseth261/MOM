const express= require("express")
const router=express.Router();
const signupController=require("../controller/signupController")

//Register user
router.post('/',signupController.register);

module.exports=router;