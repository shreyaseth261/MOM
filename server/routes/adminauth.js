const express=require("express")
const router = express.Router()
const authController=require("../controller/authController")

//admin auth
router.get("/",authController.adminauth)

module.exports=router