const db = require("../model/database");

const labtest = (req, res) => {
  const userid = req.body.userid;
  const speciality = req.body.speciality;
  const date = req.body.date;
  const time = req.body.time;
  const type = req.body.type;
  const status = req.body.status

  db.query(
    "insert into doctors_portal.labtest(user_id,speciality,date,time,type,status) values(?,?,?,?,?,?)",
    [userid, speciality, date, time, type,status],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        res.send("Appointment Successfull.");
      } else {
        res.send({ err: "Appointment failed." });
      }
    }
  );
};

const available=(req,res)=>{
    const date =req.body.date;
    const time = req.body.time;

    db.query("select date,time from doctors_portal.labtest where date=? and time=?",
    [date,time],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result!=""){
            res.send({err:"Select another time slot. This time slot is already booked."})
        }
        else{
            res.send("Time slot available.")
        }
    }
    )

}

module.exports={
    labtest,
    available
}
