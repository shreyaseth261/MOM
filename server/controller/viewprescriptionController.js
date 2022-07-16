const db = require("../model/database")

//View Prescription
const viewprescription = (req,res)=>{
    db.query("select prescriptions.user_id,prescription_id,speciality,time,DATE_FORMAT(date,'%d/%m/%Y') AS date,pdf from doctors_portal.prescriptions inner join doctors_portal.appointment on prescriptions.appointment_id = appointment.appointment_id",(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result!=""){
            res.json(result)
        }
        else{
            res.json({err:"No prescriptions"})
        }
    })
};

module.exports = {
    viewprescription
}