const express= require("express")
const router = express.Router()
const logoutController = require("../controller/logoutController")

//logout user
router.get("/",logoutController.logout);

module.exports=router;