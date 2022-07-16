const db = require("../model/database");
const multer = require("multer");
const path = require("path");

const labreport =(req,res)=>{
    const lab_id = req.body.lab_id;
    db.query(
        "select name,phnum,lab_id,user_id,speciality from doctors_portal.labtest inner join doctors_portal.users on labtest.user_id = users.id where lab_id=? ",
        [lab_id],
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
}

//Storage
const storage = multer.diskStorage({
    destination: "./public/pdf/report",
    filename: function (req, file, cb) {
      cb(
        null,
        "report" +
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
          db.query("insert into doctors_portal.labreports(report_pdf) values(?)", [
            `/${req.file.filename}`,
          ]);
          res.send({ file: `/${req.file.filename}` });
        }
      }
    });
  };

 //Upload details
const details = (req, res) => {
    const lab_id = req.body.lab_id;
    const report_pdf = req.body.pdf;
    const userid = req.body.user_id;
  
    db.query(
      "update doctors_portal.labreports set lab_id=? , user_id=? where report_pdf=?",
      [lab_id, userid, report_pdf],
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
    labreport,
    upload,
    details,
    uploadpdf
}