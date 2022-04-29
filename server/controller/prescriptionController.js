const db = require("../model/database");

const prescription=(req,res)=>{
    const appointment_id=req.body.appointment_id;
    db.query("select name,phnum,speciality,doctor from doctors_portal.appointment inner join doctors_portal.users on appointment.user_id = users.id where appointment_id=? ",[appointment_id],(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){
            res.send(result)
        }
        else{
            res.send({err:""})
        }
    })
}

module.exports={
    prescription
}