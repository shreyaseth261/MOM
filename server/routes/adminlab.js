const express = require("express")
const router = express.Router()
const adminlabController= require("../controller/adminlabController")


//admin lab appointment
router.get("/",adminlabController.adminlab)

module.exports=router