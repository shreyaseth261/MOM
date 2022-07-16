const express= require("express")
const cors = require("cors")
const { urlencoded } = require("express")
const app= express()
const signup = require("./routes/signup")
const login = require("./routes/login")
const auth=require("./routes/userAuth")
const logout = require("./routes/logout")
const appointment = require("./routes/appointment")
const labtest=require("./routes/labtest")
const viewappointment = require("./routes/viewappointment")
const viewlabtest = require("./routes/viewlabtest")
const cookieParser = require("cookie-parser")
const  available  = require("./routes/available")
const  availablelab  = require("./routes/prescription")
const adminappointment=require("./routes/adminappointment")
const adminlab=require("./routes/adminlab")
const  prescription  = require("./routes/prescription")
const upload = require("./routes/upload")
const details = require("./routes/details")
const labreport = require("./routes/labreport")
const labupload = require("./routes/labupload")
const labdetails = require("./routes/labdetails")
const adminauth = require("./routes/adminauth")
const adminlogout = require("./routes/adminlogout")
const viewprescription=require("./routes/viewprescription")
const viewreports = require("./routes/viewreports")

//middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {
        credentials:true,
        origin:["http://localhost:3000"]
    }
))

app.use(express.static("./public/pdf"))

//register
app.use("/signup",signup)

//login
app.use("/login",login)

//auth
app.use("/auth",auth)

//appointment
app.use("/appointment",appointment)

//available
app.use("/available",available)

//labtest
app.use("/labtest",labtest)

//logout
app.use("/logout",logout)

//view appointment
app.use("/viewappointment",viewappointment)

//view labtest
app.use("/viewlabtest",viewlabtest)

//admin appointments
app.use("/adminappointment",adminappointment)

//admin lab appointment
app.use("/adminlab",adminlab)

//prescription
app.use("/prescription",prescription)

//upload prescription
app.use("/upload",upload)

//upload details
app.use("/details",details)

//labreport
app.use("/labreport",labreport)

//upload lab report
app.use("/labupload",labupload)

//lab details
app.use("/labdetails",labdetails)

//admin auth
app.use("/adminauth",adminauth)

//admin logout
app.use("/adminlogout",adminlogout)

//view prescription
app.use("/viewprescription",viewprescription)

//view reports
app.use("/viewreports",viewreports)

app.listen(3001,()=>{
    console.log("Listening on port 3001")
})