const express = require("express")
const router= express.Router()
const labreportController = require("../controller/labreportController")

//lab report
router.post("/",labreportController.labreport)

module.exports=router