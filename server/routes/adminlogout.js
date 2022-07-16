const { application } = require("express")
const express=require("express")
const router=express.Router()
const logoutController=require("../controller/logoutController")

//admin logout
router.get("/",logoutController.adminlogout)

module.exports=router;