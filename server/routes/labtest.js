const express= require("express")
const router = express.Router()
const labtestController = require("../controller/labtestController")

//labtest appointment
router.post("/",labtestController.labtest)

module.exports=router