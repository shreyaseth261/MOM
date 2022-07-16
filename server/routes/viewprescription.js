const express = require("express")
const router = express.Router()
const viewprescription = require("../controller/viewprescriptionController")

router.get("/",viewprescription.viewprescription)

module.exports= router;