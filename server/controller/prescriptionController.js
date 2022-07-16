const db = require("../model/database");
const multer = require("multer");
const path = require("path");
const prescription = (req, res) => {
  const appointment_id = req.body.appointment_id;
  db.query(
    "select name,phnum,appointment_id,user_id,speciality,doctor from doctors_portal.appointment inner join doctors_portal.users on appointment.user_id = users.id where appointment_id=? ",
    [appointment_id],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ err: "" });
      }
    }
  );
};

//Storage
const storage = multer.diskStorage({
  destination: "./public/pdf",
  filename: function (req, file, cb) {
    cb(
      null,
      "prescription" +
        "-" +
        Date.now() +
        path.extname(file.originalname) +
        ".pdf"
    );
  },
});

//Upload
const upload = multer({
  storage: storage,
  limits: 1024 * 1024 * 10,
}).single("pdf");

//Uploading PDF
const uploadpdf = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      if (req.file == undefined) {
        res.json({ err: "No prescription found" });
      } else {
        db.query("insert into doctors_portal.prescriptions(pdf) values(?)", [
          `/${req.file.filename}`,
        ]);
        res.send({ file: `/${req.file.filename}` });
      }
    }
  });
};

//Upload details
const details = (req, res) => {
  const appointment_id = req.body.appointment_id;
  const pdf = req.body.pdf;
  const userid = req.body.user_id;

  db.query(
    "update doctors_portal.prescriptions set appointment_id=? , user_id=? where pdf=?",
    [appointment_id, userid, pdf],
    (err, result) => {
        if(err){
            console.log(err)
        }
        if(result){
            res.send("Uploaded")
        }
        else{
            res.send({err:"Update failed"})
        }
    }
  );
};

module.exports = {
  prescription,
  uploadpdf,
  details
};
