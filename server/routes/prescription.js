const express = require("express")
const router= express.Router()
const prescriptionController = require("../controller/prescriptionController")

//prescription
router.post("/",prescriptionController.prescription)

module.exports=router