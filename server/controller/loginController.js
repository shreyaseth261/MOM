const db=require("../model/database")
const jwt = require("jsonwebtoken")

const login=(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    db.query("select id from doctors_portal.users where binary email=? and binary password=?",
    [email,password],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result!=""){
            const token=jwt.sign({id:result[0].id},"shreya")
            res.cookie("jwt",token,{httpOnly:true})
            res.send("Loggedin")
        }
        else{
            res.send({err:"Please signup"})
        }
    })
}

module.exports={
    login
}