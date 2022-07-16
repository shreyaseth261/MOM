const express = require("express")
const router = express.Router()
const labreports = require("../controller/viewreportsController")

router.get("/",labreports.viewreports)

module.exports= router;