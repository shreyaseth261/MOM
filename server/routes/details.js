const express = require("express")
const router = express.Router()
const prescriptionController = require("../controller/prescriptionController")

router.post("/",prescriptionController.details)

module.exports= router

