const express =require("express")
const router = express.Router()
const appointmentController = require("../controller/appointmentController")
const labtestController = require("../controller/labtestController")


//available

router.post("/",appointmentController.available)
router.post("/",labtestController.available)

module.exports= router