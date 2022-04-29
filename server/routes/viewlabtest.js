
const express= require("express")
const router = express.Router()
const labtestController = require("../controller/viewlabtestController")

//View lab appointment
router.get("/",labtestController.view)

module.exports=router

