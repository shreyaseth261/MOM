const db = require("../model/database")
const jwt = require("jsonwebtoken")

const auth = (req,res)=>{
    const cookie=req.cookies.jwt

    if(!cookie){
        res.json({err:"Not authenticated"})
    }
    else{
        jwt.verify(cookie,"shreya",(err,result)=>{
            if(err){
                res.json({err:"Not authenticated"})
            }
            if(result){
                const id=result.id
                db.query("select name from doctors_portal.users where id = ?",[id],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    if(result!=""){
                        res.json({name:result[0].name,id:id})
                    }
                    else{
                        res.json({err:"user not authenticated"})
                    }
                })
            }
        })
    }
}

const adminauth = (req,res) =>{
    const cookie=req.cookies.adminjwt

    if(!cookie){
        res.json({err:"Admin not authenticated"})
    }
    else{
        jwt.verify(cookie,"shreya",(err,result)=>{
            if(err){
                console.log(err)
            }
            if(result){
                const id= result.id;
                res.json({admin:"Admin Authenticated"})
            }
            else{
                res.json({err:"Admin not authenticated"})
            }
        })
    }
}
module.exports={
    auth,
    adminauth
}