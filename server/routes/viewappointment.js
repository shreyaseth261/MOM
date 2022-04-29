
const express= require("express")
const router = express.Router()
const viewappointmentController = require("../controller/viewappointmentController")

//View Appointment
router.get("/",viewappointmentController.view);


module.exports=router
