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

app.use("/prescription",prescription)


app.listen(3001,()=>{
    console.log("Listening on port 3001")
})