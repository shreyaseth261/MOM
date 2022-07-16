const express= require("express")
const router = express.Router()
const labreportController = require("../controller/labreportController")

router.post("/",labreportController.uploadpdf)

module.exports=router