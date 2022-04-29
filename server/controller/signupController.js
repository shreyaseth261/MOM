const db= require("../model/database");

const register=(req,res)=>{
    const email=req.body.email;
    const name=req.body.name;
    const phno = req.body.phno;
    const password = req.body.password;

    db.query("insert into doctors_portal.users(email,name,phnum,password) values(?,?,?,?)",[email,name,phno,password],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send("Signup successful");
        }
        else{
            res.send({err:"User already exists"})
        }
    })
}

module.exports={
    register
}