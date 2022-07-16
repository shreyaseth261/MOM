const db = require("../model/database");

const appointment = (req, res) => {
  const userid = req.body.userid;
  const date = req.body.date;
  const time = req.body.time;
  const type = req.body.type;
  const speciality = req.body.speciality;
  const doctor = req.body.doctor;
  const status=req.body.status

  db.query(
    "insert into doctors_portal.appointment(user_id,date,time,type,speciality,doctor,status) values(?,?,?,?,?,?,?)",
    [userid, date, time, type, speciality, doctor,status],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        res.send("Appointment Successful");
      } else {
        res.send({ err: "Appointment failed" });
      }
    }
  );
};

const available = (req, res) => {
  const date = req.body.date;
  const time = req.body.time;

  db.query(
    "select date,time from doctors_portal.appointment where date=? and time=?",
    [date, time],
    (err, result) => {
      if(err){
        console.log(err);
      }
      if(result!=""){
        res.send({err:"Select another slot,this slot is already booked."})
      }
      else{
        res.send("Time slot available")
      }
    }
  );
};

module.exports = {
  appointment,
  available
};
