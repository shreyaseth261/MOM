const mysql = require("mysql")

const db= mysql.createConnection({
    host:"localhost",
    password:'',
    user:'root',
    database:"doctors_portal"

})

module.exports=db;