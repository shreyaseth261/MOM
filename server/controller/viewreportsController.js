const db = require("../model/database")

//View Prescription
const viewreports = (req,res)=>{
    db.query("select labreports.user_id,report,speciality,time,DATE_FORMAT(date,'%d/%m/%Y') AS date,report_pdf from doctors_portal.labreports inner join doctors_portal.labtest on labreports.lab_id = labtest.lab_id",(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result!=""){
            res.json(result)
        }
        else{
            res.json({err:"No Reports"})
        }
    })
};

module.exports = {
    viewreports
}