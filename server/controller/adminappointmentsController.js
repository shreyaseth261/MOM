const db = require("../model/database");

const adminappointment = (req, res) => {
  db.query(
    "select name,phnum,email,appointment_id,DATE_FORMAT(date,'%d/%m/%Y') as date,time,speciality,status from doctors_portal.appointment inner join doctors_portal.users on appointment.user_id = users.id where status = 'pending' ",(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){
            res.send(result)
        }
        else{
            res.send({err:"No appointments"})
        }
    }
    
  );
};


module.exports={
    adminappointment
}