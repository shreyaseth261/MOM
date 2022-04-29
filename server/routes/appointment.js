const express=require("express")
const router = express.Router()
const appointmentController=require("../controller/appointmentController")

//user appointment
router.post("/",appointmentController.appointment)

module.exports=router