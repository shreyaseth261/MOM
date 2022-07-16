const db=require("../model/database")
const jwt = require("jsonwebtoken")

//User Login
const login=(req,res)=>{
    const email=req.body.email
    const password=req.body.password

    if(email=="admin@gmail.com" && password=="admin@123"){
        db.query("select id from doctors_portal.users where binary email=? and binary password=?",[email,password],(err,result)=>{
            if(err){
                console.log(err)
            }
            if(result){
                const admintoken=jwt.sign({id:result[0].id},"shreya")
                res.cookie("adminjwt",admintoken,{httpOnly:true})
                res.send("Admin Loggedin")
            }
            else{
                res.send({err:"Admin not logged in"})
            }
        })
    }
    else {db.query("select id from doctors_portal.users where binary email=? and binary password=?",
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
    })}
}

//Admin login

module.exports={
    login
}