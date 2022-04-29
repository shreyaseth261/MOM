const express = require("express")
const router = express.Router()
const adminappointmentController= require("../controller/adminappointmentsController")


//admin appointment
router.get("/",adminappointmentController.adminappointment)

module.exports=router