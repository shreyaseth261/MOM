const express=require("express")
const router = express.Router()
const authController=require("../controller/authController")
//user auth
router.get("/",authController.auth)

module.exports=router